import React from 'react';
import { actionTypes } from '../../actions';
import hookActions from '../../actions/hookActions';
import Input from '../Input';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return { ...state, secretWord: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord) =>
    dispatch({ type: actionTypes.SET_SECRET_WORD, payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) return <div data-test="spinner">[SPINNER HERE]</div>;

  return (
    <div data-test="component-app">
      <h1>Jotto</h1>
      <Input secretWord={state.secretWord} />
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
