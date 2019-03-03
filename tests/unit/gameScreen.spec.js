import { shallowMount } from '@vue/test-utils'
import GameScreen from '@/components/Hangman/GameScreen.vue'

describe('GameScreen.vue', () => {
  console.log = jest.fn();

  test('renders encoded word', () => {
    let encodedWord = 'bo__le';
    let wrapper = shallowMount(GameScreen, {
      propsData: {
        encodedWord
      }
    });

    expect(wrapper.text()).toContain(encodedWord);
  });
});
