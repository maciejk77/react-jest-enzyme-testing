import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Input from './index';

const setup = (secretWord = 'party') =>
  shallow(<Input secretWord={secretWord} />);

it('renders Input without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess;
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  it('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  it('clears the field upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    submitButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});

// import React from 'react';
// import { shallow } from 'enzyme';
// import { findByTestAttr, storeFactory } from '../../../test/testUtils';
// import Input, { UnconnectedInput } from './index';

// const setup = (initialState = {}) => {
//   const store = storeFactory(initialState);
//   const wrapper = shallow(<Input store={store} />)
//     .dive()
//     .dive();
//   // console.log(wrapper.debug());
//   return wrapper;
// };

// describe('render', () => {
//   describe('word has NOT been guessed', () => {
//     let wrapper;
//     beforeEach(() => {
//       const initialState = { success: false };
//       wrapper = setup(initialState);
//     });

//     it('renders component without error', () => {
//       const component = findByTestAttr(wrapper, 'component-input');
//       expect(component.length).toBe(1);
//     });
//     it('renders input box', () => {
//       const inputBox = findByTestAttr(wrapper, 'input-box');
//       expect(inputBox.length).toBe(1);
//     });
//     it('renders submit button', () => {
//       const submitButton = findByTestAttr(wrapper, 'submit-button');
//       expect(submitButton.length).toBe(1);
//     });
//   });

//   describe('word has been guessed', () => {
//     let wrapper;
//     beforeEach(() => {
//       const initialState = { success: true };
//       wrapper = setup(initialState);
//     });

//     it('does NOT render input box', () => {
//       const inputBox = findByTestAttr(wrapper, 'input-box');
//       expect(inputBox.length).toBe(0);
//     });
//     it('does NOT render submit button', () => {
//       const submitButton = findByTestAttr(wrapper, 'submit-button');
//       expect(submitButton.length).toBe(0);
//     });
//   });
// });

// describe('redux props', () => {
//   it('has success piece of state as prop', () => {
//     const success = true;
//     const wrapper = setup({ success });
//     // console.log(wrapper.instance().props.success);
//     const successProp = wrapper.instance().props.success;
//     expect(successProp).toBe(success);
//   });
//   it('`guessWord` action creator is a function prop', () => {
//     const wrapper = setup();
//     // console.log(wrapper.instance());
//     const guessWordProp = wrapper.instance().props.guessWord;
//     expect(guessWordProp).toBeInstanceOf(Function);
//   });
// });

// describe('`guessWord` action creator call', () => {
//   let guessWordMock;
//   let wrapper;
//   const guessedWord = 'train';

//   beforeEach(() => {
//     guessWordMock = jest.fn();
//     const props = {
//       guessWord: guessWordMock,
//     };

//     wrapper = shallow(<UnconnectedInput {...props} />);
//     wrapper.setState({ currentGuess: guessedWord });

//     const submitButton = findByTestAttr(wrapper, 'submit-button');
//     submitButton.simulate('click', { preventDefault() {} });
//   });

//   it('calls `guessWord` when button is clicked', () => {
//     const guessWordCallCount = guessWordMock.mock.calls.length;
//     expect(guessWordCallCount).toBe(1);
//   });

//   it('calls `guessWord` with input value as argument', () => {
//     const guessWordArg = guessWordMock.mock.calls[0][0];
//     expect(guessWordArg).toBe(guessedWord);
//   });

//   it('input box clears on submit', () => {
//     expect(wrapper.state('currentGuess')).toBe('');
//   });
// });
