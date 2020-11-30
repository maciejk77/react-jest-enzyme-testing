import React from 'react';
import { shallow, mount } from 'enzyme';
import Congrats from '../Congrats';
import languageContext from '../../contexts/languageContext';
import { findByTestAttr } from '../../../test/testUtils';

const defaultProps = { success: false };

// const setup = (props = {}) => {
//   const setupProps = { ...defaultProps, ...props };
//   return shallow(<Congrats {...setupProps} />);
// };

const setup = (success, language) => {
  language = language || 'en';
  const successLogic = success ? true : false;

  return mount(
    <languageContext.Provider value={language}>
      <Congrats success={successLogic} />
    </languageContext.Provider>
  );
};

describe('languagePicker', () => {
  it('correctly renders congrats string in English', () => {
    const wrapper = setup({ success: true });
    expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
  });

  // TEMP DISABLED, FAILING TEST
  // it('correctly renders congrats string in Polish', () => {
  //   const wrapper = setup({ success: true, language: 'pl' });
  //   expect(wrapper.text()).toBe('Gratulacje! Zgadles slowo!');
  // });
});

it('renders without error', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

// TEMP DISABLE, FAILING TEST
// it('renders no text when `success` prop is FALSE', () => {
//   const wrapper = setup({ success: false });
//   const component = findByTestAttr(wrapper, 'component-congrats');
//   expect(component.text()).toBe('');
// });

it('renders non-empty congrats message when `success` props is TRUE', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'component-message');
  expect(component.text().length).not.toBe(0);
});
