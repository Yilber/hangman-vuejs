<template>
  <div>
    <ul>
      <li v-for="row in keyboard.length">
        <button v-for="key in keyboard[row - 1]" @click="keyboardInput(key)">{{ key }}</button>
      </li>
    </ul>

    <input type="text" v-model="letter" @input="keyboardInput(letter)">
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyboard: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
      letter: ''
    }
  },

  methods: {
    keyboardInput(key) {
      this.letter = ''
      this.$emit('input', key)
    }
  }
}
</script>

<style scoped lang="scss">
  div {
    display: inline-block;
    margin: auto;
  }

  ul {
    padding-left: 0;

    li {
      margin: 2px 0;

      button {
        border: 1px solid #000;
        border-radius: 3px;
        font-weight: bold;
        margin: 2px 3px;
        padding: 5px 0;
        text-align: center;
        text-transform: uppercase;
        width: 40px;
      }

      &:nth-child(2) {
        padding-left: 20px;
      }

      &:nth-child(3) {
        padding-left: 63px;
      }
    }
  }

  input {
    display: block;
    width: 316px;
    padding: 5px;
    margin-left: 66px;
    box-sizing: border-box;
  }
</style>
