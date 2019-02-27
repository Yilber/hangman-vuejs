import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Hangman from '@/views/Hangman.vue'

describe('App.vue', () => {
  console.log = jest.fn();

  test('renders title', () => {
    let title = 'Hangman game';
    let wrapper = shallowMount(App);

    expect(wrapper.text()).toContain(title);
  });

  test('renders lead message', () => {
    let lead = 'Guess the fruit';
    let wrapper = shallowMount(App);

    expect(wrapper.text()).toContain(lead);
  });

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
