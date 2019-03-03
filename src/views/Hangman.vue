<template>
  <div id="hangman">
    <game-status :lives="livesLeft" :attempts="attemptsLeft" :missedLetters="missedLetters" />
    <game-screen :class="style" :encodedWord="encodedWord" />
    <game-controls :class="style" @input="checkInput" :isActive="isRunning" />
  </div>
</template>

<script>
import GameStatus from '@/components/Hangman/GameStatus.vue'
import GameScreen from '@/components/Hangman/GameScreen.vue'
import GameControls from '@/components/Hangman/GameControls.vue'

export default {
  name: 'hangman',

  props: {
    lives: {
      type: Number,
      default: 3,
      validator(lives){
        return lives >= 1
      }
    },

    attempts: {
      type: Number,
      default: 6,
      validator(attempts){
        return attempts > 1
      }
    },

    wordList: {
      type: Array,
      default: ['grape', 'apple', 'pineaple', 'orange', 'banana', 'strawberry', 'mango'],
      validator(wordList){
        return wordList.length > 0
      }
    }
  },

  beforeMount(){
    this.reset()
  },

  data(){
    return {
      word: '',
      encodedWord: '',
      missedLetters: [],
      hiddenLetters: [],
      attemptsLeft: 0,
      livesLeft: this.lives,
      style: '',
      isRunning: true
    }
  },

  watch: {
    attemptsLeft(){
      if(this.attemptsLeft === 0){
        this.won(false);
      }
    },

    livesLeft(){
      if(this.livesLeft === 0){
        this.livesLeft = this.lives;
        alert('Game over')
      }
    },

    hiddenLetters: function(){
      let length = this.word.length;
      let encodedWord = this.encodedWord.split('');

      this.hiddenLetters.forEach((letter) => {
        for (let i = 0; i < length; ++i) {
          if (this.word.charAt(i) === letter) {
            encodedWord[i] = letter;
          }
        }
      });

      this.encodedWord = encodedWord.join('');

      if(this.encodedWord === this.word){
        this.won(true)
      }
    },
  },

  methods: {
    reset(){
      let random = Math.floor(Math.random() * this.wordList.length);

      this.word = this.wordList[random].toLowerCase();
      this.encodedWord = this.word.split('').fill('_', 0, this.word.length).join('');
      this.missedLetters = [];
      this.hiddenLetters = [];
      this.attemptsLeft = this.attempts;
    },

    checkInput(key){
      let wasTyped = new Set([...this.hiddenLetters, ...this.missedLetters]).has(key);

      if(wasTyped) return;

      let isFound = this.word.search(key) >= 0? true: false;

      if (isFound) {
        this.hiddenLetters.push(key);
        this.hiddenLetters = [...new Set(this.hiddenLetters)];
      } else {
        this.missedLetters.push(key);
        this.missedLetters = [...new Set(this.missedLetters)];
        this.attemptsLeft--;
      }
    },

    // this method needs a better name
    won(isWinner){
      let self = this;
      this.style = isWinner ? 'won':'lost';
      this.isRunning = false;

      if(!isWinner){
        this.encodedWord = this.word;
        this.livesLeft--;
      }

      setTimeout(() => {
        self.reset();
        self.style = '';
        this.isRunning = true;
      }, 1000)
    }
  },

  components: {
    GameStatus,
    GameScreen,
    GameControls
  }
}
</script>

<style lang="scss">
  .won {
    color: green;

    ul > li > button {
      background-color: green;
    }
  }

  .lost {
    color: red;

    ul > li > button {
      background-color: red;
    }
  }
</style>
