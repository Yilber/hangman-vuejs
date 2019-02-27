import { shallowMount } from '@vue/test-utils'
import GameScreen from '@/components/Hangman/GameScreen.vue'

describe('GameScreen.vue', () => {
  console.log = jest.fn();

  let word, hiddenLetters;

  beforeEach(() => {
    word = 'bottle';
    hiddenLetters = ['b', 't'];
  });

  test('renders encoded word', () => {
    let encodedWord = word.split('').fill('_', 0, word.length).join('');

    let wrapper = shallowMount(GameScreen, {
      propsData: {
        word,
        hiddenLetters: []
      }
    });

    expect(wrapper.text()).toContain(encodedWord);
  });

  test('renders hidden letters', () => {
    let wrapper = shallowMount(GameScreen, {
      propsData: {
        word,
        hiddenLetters
      }
    });

    expect(wrapper.text()).toBe('b_tt__');
  });

  test('updates encoded word when hidden letters are added', () => {
    let wrapper = shallowMount(GameScreen, {
      propsData: {
        word,
        hiddenLetters
      }
    });

    wrapper.setProps({
      hiddenLetters: ['b', 't', 'o', 'e']
    });

    expect(wrapper.text()).toContain('bott_e');
  });

  test('emits wordCompleted when all hidden letters match word', () => {
    let wrapper = shallowMount(GameScreen, {
      propsData: {
        word: 'hello',
        hiddenLetters: ['e', 'l', 'h', 'o']
      }
    });

    expect(wrapper.emitted('wordCompleted')).toBeTruthy();
  });
});
