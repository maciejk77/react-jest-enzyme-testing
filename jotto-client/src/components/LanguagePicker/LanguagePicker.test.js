import React from 'react';
import { shallow } from 'enzyme';
import LanguagePicker from './';

import { findByTestAttr } from '../../../test/testUtils';

const mockSetLanguage = jest.fn();
const setup = () => shallow(<LanguagePicker setLanguage={mockSetLanguage} />);

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-language-picker');
  expect(component.exists()).toBe(true);
});

it('renders non-zero number of icons', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, 'language-icon');
  expect(languageIcons.length).toBeGreaterThan(0);
});

it('calls setLanguage prop upon click', () => {
  const wrapper = setup();
  const languageIcons = findByTestAttr(wrapper, 'language-icon');

  const firstIcon = languageIcons.first();
  firstIcon.simulate('click');

  expect(mockSetLanguage).toHaveBeenCalled();
});
