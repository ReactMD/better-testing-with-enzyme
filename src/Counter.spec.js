import React from 'react';
import { mount, shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  describe('with shallow rendering', () => {
    it('should increment the count when addOne is called', () => {
      const wrapper = shallow(<Counter />);

      wrapper.instance().addOne();

      expect(wrapper.state().count).toEqual(1);
    });

    it('should decrement the count when subtractOne is called', () => {
      const wrapper = shallow(<Counter />);

      wrapper.instance().subtractOne();

      expect(wrapper.state().count).toEqual(-1);
    });
  });

  describe('with mounting', () => {
    it('should increment the value when the increment button is clicked', () => {
      const wrapper = mount(<Counter />);
      const value = wrapper.find('h3');

      const incrementButton = wrapper.find('button').at(0);
      incrementButton.simulate('click');

      expect(value.text()).toEqual('1');
    });

    it('should decrement the value when the decrement button is clicked', () => {
      const wrapper = mount(<Counter />);
      const value = wrapper.find('h3');

      const decrementButton = wrapper.find('button').at(1);
      decrementButton.simulate('click');

      expect(value.text()).toEqual('-1');
    });
  });
});
