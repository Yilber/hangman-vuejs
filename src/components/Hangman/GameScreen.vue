<template>
  <div>
    <span>{{ encodedWord }}</span>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: true,
      validator: function(word){
        return word !== ""
      }
    },

    hiddenLetters: {
      type: Array,
      required: true
    }
  },

  data(){
    return {
      encodedWord: ''
    }
  },

  beforeMount(){
    this.reset();
  },

  watch: {
    hiddenLetters: function(){
      this.update();
    },

    word: function(){
      this.reset()
    }
  },

  methods: {
    reset(){
      this.encodedWord = this.word.split('').fill('_', 0, this.word.length).join('')
      this.update();
    },

    update(){
      let word = this.word.split('')
      let length = word.length
      let encodedWord = this.encodedWord.split('')

      this.hiddenLetters.forEach((letter) => {
        for (let i = 0; i < length; ++i) {
          if (word[i] === letter) {
            encodedWord[i] = letter
          }
        }
      })

      this.encodedWord = encodedWord.join('')

      if(this.encodedWord === this.word){
        this.$emit('wordCompleted')
      }
    }
  }
}
</script>

<style scoped>
 span {
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
 }
</style>
