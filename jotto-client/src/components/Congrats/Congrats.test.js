import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from '../Congrats';
import { findByTestAttr } from '../../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => shallow(<Congrats {...props} />);

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

it('renders no text when `success` prop is FALSE', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

it('renders non-empty congrats message when `success` props is TRUE', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'component-message');
  expect(component.text().length).not.toBe(0);
});
