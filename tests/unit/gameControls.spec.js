import { shallowMount } from '@vue/test-utils'
import GameControls from '@/components/Hangman/GameControls.vue'

describe('GameControls.vue', () => {
  console.log = jest.fn();

  test('emits a letter when a button clicked', () => {
    let wrapper = shallowMount(GameControls);
    let buttons = wrapper.findAll('button');
    let keyboardLength = wrapper.vm.keyboard.join("").split("").length;

    buttons.wrappers.forEach((button) => button.trigger('click'));
    expect(wrapper.emitted('input')).toHaveLength(keyboardLength);
    expect(buttons).toHaveLength(keyboardLength);
  });

  test('emits key typed', () => {
    let wrapper = shallowMount(GameControls);
    let input = wrapper.find('input');

    input.setValue('x');
    expect(wrapper.emitted('input')).toBeTruthy();
  });
});
