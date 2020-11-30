import React from 'react';
import { actionTypes } from '../../actions';
import hookActions from '../../actions/hookActions';
import languageContext from '../../contexts/languageContext';
import LanguagePicker from '../LanguagePicker';
import Input from '../Input';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return { ...state, secretWord: action.payload };
    case actionTypes.SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) =>
    dispatch({ type: actionTypes.SET_SECRET_WORD, payload: secretWord });

  const setLanguage = (language) => {
    return dispatch({ type: actionTypes.SET_LANGUAGE, payload: language });
  };

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) return <div data-test="spinner">[SPINNER HERE]</div>;

  return (
    <div data-test="component-app">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
    </div>
  );
};

export default App;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import GuessedWords from '../GuessedWords';
// import Congrats from '../Congrats';
// import Input from '../Input';
// import { getSecretWord } from '../../actions';

// export class UnconnectedApp extends Component {
//   componentDidMount() {
//     this.props.getSecretWord();
//   }
//   render() {
//     return (
//       <div>
//         <h1>Jotto</h1>
//         <div>Secret word is: {this.props.secretWord}</div>
//         <Input />
//         <Congrats success={this.props.success} />
//         <GuessedWords guessedWords={this.props.guessedWords} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   const { success, guessedWords, secretWord } = state;
//   return { success, guessedWords, secretWord };
// };

// export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
