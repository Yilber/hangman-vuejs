<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ heading }}</p>

    <hangman :wordList="wordList" />
  </div>
</template>

<script>
import Hangman from '@/views/Hangman.vue'

export default {
  name: 'app',

  data() {
    return {
      title: 'Hangman game',
      heading: 'Guess the fruit',
      wordList: ['grape', 'apple', 'pineaple', 'orange', 'banana', 'strawberry', 'mango']
    }
  },

  components: {
    'hangman': Hangman
  }
}
</script>

<style lang="scss">
  body {
    font-family: sans-serif;
  }
</style>
