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
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      keyboard: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
      letter: ''
    }
  },

  methods: {
    keyboardInput(key) {
      this.letter = '';

      if(!key.match(/^[a-zA-Z]+$/)){
        alert('Invalid input.\nOnly letters please.')
      } else if(this.isActive){
        this.$emit('input', key.toLowerCase())
      }
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
      display: block;
      margin: 2px 0;

      button {
        background-color: #000;
        border: none;
        border-radius: 3px;
        color: #fff;
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
        padding-left: 66px;
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
