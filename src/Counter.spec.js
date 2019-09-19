import React from 'react';
import { mount, shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  describe('with shallow rendering', () => {
    it('should increment the value when onIncrement is called', () => {
      const wrapper = shallow(<Counter />);

      wrapper.instance().onIncrement();

      expect(wrapper.state().value).toEqual(1);
    });

    it('should decrement the value when onDecrement is called', () => {
      const wrapper = shallow(<Counter />);

      wrapper.instance().onDecrement();

      expect(wrapper.state().value).toEqual(-1);
    });
  });

  describe('with mounting', () => {
    it('should increment the value when the increment button is clicked', () => {
      const wrapper = mount(<Counter />);
      const value = wrapper.find('.value');

      const incrementButton = wrapper.find('button').at(0);
      incrementButton.simulate('click');

      expect(value.text()).toEqual('1');
    });

    it('should decrement the value when the decrement button is clicked', () => {
      const wrapper = mount(<Counter />);
      const value = wrapper.find('.value');

      const decrementButton = wrapper.find('button').at(1);
      decrementButton.simulate('click');

      expect(value.text()).toEqual('-1');
    });
  });
});
