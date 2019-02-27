<template>
  <div id="hangman">
    <game-status :lives="livesLeft" :attempts="attemptsLeft" :missedLetters="missedLetters" />
    <game-screen :word="word" :hiddenLetters="hiddenLetters" @wordCompleted="reset" />
    <game-controls @input="checkWord" />
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
      default: 3
    },

    attempts: {
      type: Number,
      default: 6
    },

    wordList: {
      type: Array,
      required: true
    }
  },

  data(){
    return {
      word: this.wordList[0],
      missedLetters: [],
      hiddenLetters: [],
      attemptsLeft: this.attempts,
      livesLeft: this.lives,
      isGameRunning: false
    }
  },

  watch: {
    attemptsLeft(){
      if(this.attemptsLeft === 0){
        this.livesLeft--;
        this.attemptsLeft = this.attempts;
      }
    },
  },

  methods: {
    reset(lives = false){
      let random = Math.floor(Math.random() * this.wordList.length);

      this.word = this.wordList[random];
      this.missedLetters = [];
      this.hiddenLetters = [];
      this.attemptsLeft = this.attempts;

      if(lives){
        this.livesLeft = this.lives;
      }
    },

    checkWord(key){
      let isFound = this.word.search(key) >= 0? true: false;

      if (isFound) {
        this.hiddenLetters.push(key);
      } else {
        this.missedLetters.push(key);
        this.attemptsLeft--;
      }
    }
  },

  components: {
    GameStatus,
    GameScreen,
    GameControls
  }
}
</script>
