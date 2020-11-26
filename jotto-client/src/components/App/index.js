import React from 'react';

const App = () => {
  return (
    <div data-test="component-app">
      <h1>Jotto</h1>
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
