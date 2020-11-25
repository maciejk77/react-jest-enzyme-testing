import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Input, { UnconnectedInput } from './index';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('render', () => {
  describe('word has NOT been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    it('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    it('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    it('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    it('does NOT render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    it('does NOT render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  it('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    // console.log(wrapper.instance().props.success);
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  it('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    // console.log(wrapper.instance());
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord` action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';

  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    };

    wrapper = shallow(<UnconnectedInput {...props} />);
    wrapper.setState({ currentGuess: guessedWord });

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('calls `guessWord` when button is clicked', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test('calls `guessWord` with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
});
