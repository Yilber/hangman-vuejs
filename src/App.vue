<template>
  <div id="app" class="center">
    <h1>{{ title }}</h1>
    <p>{{ heading }}</p>

    <hangman :wordList="wordList" />
  </div>
</template>

<script>
import Hangman from '@/views/Hangman.vue'

export default {
  name: 'app',

  data(){
    return {
      title: 'Hangman game',
      heading: 'Guess the color',
      wordList: ['purple', 'green', 'orange', 'red', 'white', 'blue', 'yellow', 'black', 'ivory',
        'beige', 'pink', 'magenta', 'violet', 'navy', 'brown', 'gray', 'turquoise'
      ]
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

  .center {
    display: table;
    margin: auto;
  }
</style>
