import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import App from './';
import hookActions from '../../actions/hookActions';
// import enableHooks from 'jest-react-hooks-shallow';

const mockGetSecretWord = jest.fn();

const setup = (secretWord = 'party') => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()]);
  React.useReducer = mockUseReducer;
  return mount(<App />);
};

it('App renders without error', () => {
  const wrapper = setup();

  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  it('`getSecretWord` gets called on App mount', () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  it('`getSecretWord` does NOT update on App update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();
    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe('secretWord is NOT null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup('party');
  });
  it('renders app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(true);
  });
  it('does not render spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(false);
  });
});

describe('secretWord is null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });
  it('does NOT render app when secretWord is null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(false);
  });
  it('renders spinner when secretWord is null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(true);
  });
});

// import React from 'react';
// import { shallow } from 'enzyme';

// import { storeFactory } from '../../../test/testUtils';
// import App, { UnconnectedApp } from './';

// const setup = (state = {}) => {
//   const store = storeFactory(state);

//   const wrapper = shallow(<App store={store} />)
//     .dive()
//     .dive();
//   return wrapper;
// };

// describe('redux properties', () => {
//   it('has access to `success` state', () => {
//     const success = true;
//     const wrapper = setup({ success });
//     const successProp = wrapper.instance().props.success;
//     expect(successProp).toBe(success);
//   });

//   it('has access to `secretWord` state', () => {
//     const secretWord = 'party';
//     const wrapper = setup({ secretWord });
//     const secretWordProp = wrapper.instance().props.secretWord;
//     expect(secretWordProp).toBe(secretWord);
//   });

//   it('has access to `guessedWords` state', () => {
//     const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
//     const wrapper = setup({ guessedWords });
//     const guessedWordsProp = wrapper.instance().props.guessedWords;
//     expect(guessedWordsProp).toEqual(guessedWords);
//   });

//   it('`getSecretWord` action creator is a function on the props', () => {
//     const wrapper = setup();
//     const getSecretWordProp = wrapper.instance().props.getSecretWord;
//     expect(getSecretWordProp).toBeInstanceOf(Function);
//   });
// });

// it('`getSecretWordMock` runs on App mount', () => {
//   const getSecretWordMock = jest.fn();
//   const props = {
//     getSecretWord: getSecretWordMock,
//     success: false,
//     guessedWords: [],
//   };

//   const wrapper = shallow(<UnconnectedApp {...props} />);
//   wrapper.instance().componentDidMount();
//   const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
//   expect(getSecretWordCallCount).toBe(1);
// });
