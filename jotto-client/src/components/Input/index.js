import React from 'react';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState(''); // no destructuring to be able to mock it

  const handleButtonClick = (e) => {
    e.preventDefault();
    setCurrentGuess('');
  };

  return (
    <div data-test="component-input">
      <form>
        <input
          data-test="input-box"
          onChange={(e) => setCurrentGuess(e.target.value)}
          placeholder="Enter guess"
          type="text"
          value={currentGuess}
        />
        <button
          data-test="submit-button"
          onClick={handleButtonClick}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { guessWord } from '../../actions';

// export class UnconnectedInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentGuess: '',
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const guessedWord = this.state.currentGuess;

//     if (guessedWord && guessedWord.length > 0) {
//       this.props.guessWord(guessedWord);
//       this.setState({ currentGuess: '' });
//     }
//   }

//   render() {
//     const contents = this.props.success ? null : (
//       <form>
//         <input
//           data-test="input-box"
//           type="text"
//           placeholder="enter guess"
//           onChange={(e) => this.setState({ currentGuess: e.target.value })}
//           value={this.state.currentGuess}
//         />
//         <button
//           data-test="submit-button"
//           onClick={(e) => this.handleSubmit(e)}
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//     );
//     return <div data-test="component-input">{contents}</div>;
//   }
// }

// const mapStateToProps = ({ success }) => {
//   return { success };
// };

// export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
