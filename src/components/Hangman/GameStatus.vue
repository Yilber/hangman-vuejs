<template>
  <div>
    <p>Lives left: {{ lives }}</p>
    <p>Attempts left: {{ attempts }}</p>
    <p>Missed letters: {{ missedLetters.join("") }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      lives: Number,
      attempts: Number,
      missedLetters: {
        type: Array,
        default: function(){
          return []
        }
      }
    }
  }
</script>
