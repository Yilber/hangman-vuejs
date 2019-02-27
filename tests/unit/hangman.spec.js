import { shallowMount, mount } from '@vue/test-utils'
import Hangman from '@/views/Hangman.vue'
import GameStatus from '@/components/Hangman/GameStatus.vue'
import GameScreen from '@/components/Hangman/GameScreen.vue'
import GameControls from '@/components/Hangman/GameControls.vue'

describe('Hangman.vue', () => {
  console.log = jest.fn();

  test('renders GameStatus component', () => {
    let wrapper = shallowMount(Hangman, {
      propsData: {
        wordList: ['john', 'doe']
      }
    });

    let gameStatus = wrapper.find(GameStatus);

    expect(gameStatus.exists()).toBe(true);
  });

  test('renders GameScreen component', () => {
    let wrapper = shallowMount(Hangman, {
      propsData: {
        wordList: ['john', 'doe']
      }
    });

    let gameScreen = wrapper.find(GameScreen);

    expect(gameScreen.exists()).toBe(true);
  });

  test('renders GameControls component', () => {
    let wrapper = shallowMount(Hangman, {
      propsData: {
        wordList: ['john', 'doe']
      }
    });

    let gameControls = wrapper.find(GameControls);
    expect(gameControls.exists()).toBe(true);
  });

  test('Adds wrong input to missedLetters', () => {
    let wrapper = mount(Hangman, {
      propsData: {
        wordList: ['xavier']
      }
    });

    let input = wrapper.find('input');
    input.setValue('t');

    expect(wrapper.vm.missedLetters).toContain('t');
  });

  test('Adds right input to hiddenLetters', () => {
    let wrapper = mount(Hangman, {
      propsData: {
        wordList: ['xavier']
      }
    });

    let input = wrapper.find('input');
    input.setValue('x');

    expect(wrapper.vm.hiddenLetters).toContain('x');
  });

  test('reduces a live when attemptsLeft is 0', () => {
    let wrapper = shallowMount(Hangman, {
      propsData: {
        wordList: ['john', 'doe']
      }
    });

    let lives = wrapper.vm.livesLeft;
    wrapper.vm.attemptsLeft = 0;

    expect(wrapper.vm.livesLeft).toBe(lives -1);
  });

  test('reduces number of attemptsLeft when wrong input is given', () => {
    let wrapper = shallowMount(Hangman, {
      propsData: {
        wordList: ['john', 'doe']
      }
    });

    let attemptsLeft = wrapper.vm.attemptsLeft - 1;

    wrapper.vm.checkWord('t');
    expect(wrapper.vm.attemptsLeft).toBe(attemptsLeft);
  });
});
