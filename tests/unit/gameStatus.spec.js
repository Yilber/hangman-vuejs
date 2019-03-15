import { shallowMount } from '@vue/test-utils'
import GameStatus from '@/components/Hangman/GameStatus.vue'

describe('GameStatus.vue', () => {
  console.log = jest.fn();

  test('renders lives left', () => {
    let lives = 3;
    let message = `Lives left: ${lives}`;
    let wrapper = shallowMount(GameStatus, {
      propsData: {
        lives
      }
    });

    expect(wrapper.text()).toContain(message);
  });

  test('renders attempts left', () => {
    let attempts = 10;
    let message = `Attempts left: ${attempts}`;
    let wrapper = shallowMount(GameStatus, {
      propsData: {
        attempts
      }
    });

    expect(wrapper.text()).toContain(message);
  });

  test('renders missed letters', () => {
    let missedLetters = ['t', 'a', 'g'];
    let message = `Missed letters: ${missedLetters.join("")}`;
    let wrapper = shallowMount(GameStatus, {
      propsData: {
        missedLetters
      }
    });

    expect(wrapper.text()).toContain(message);
  });
});
