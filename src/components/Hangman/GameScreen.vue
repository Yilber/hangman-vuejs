<template>
  <div>
    <span>{{ encodedWord }}</span>
  </div>
</template>

<script>
export default {
  props: {
    encodedWord: {
      type: String,
      required: true,
      validator: function(word){
        return word !== ""
      }
    }
  },
}
</script>

<style scoped>
  div {
    text-align: center;
  }

  span {
    font-weight: 600;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
</style>
