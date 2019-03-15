import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Hangman from '@/views/Hangman.vue'

describe('App.vue', () => {
  console.log = jest.fn();

  test('renders the Hangman component', () => {
    let wrapper = shallowMount(App);
    let hangman = wrapper.find(Hangman);

    expect(hangman.exists()).toBe(true);
  });

  test('passes wordList props to the Hangman component', () => {
    let wrapper = shallowMount(App);
    let hangman = wrapper.find(Hangman);
    let wordList = wrapper.vm.wordList;

    expect(hangman.props().wordList).toEqual(wordList);
  });
});
