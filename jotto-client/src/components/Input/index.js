import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }

  render() {
    const contents = this.props.success ? null : (
      <form>
        <input
          data-test="input-box"
          type="text"
          placeholder="enter guess"
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
          value={this.state.currentGuess}
        />
        <button
          data-test="submit-button"
          onClick={(e) => this.handleSubmit(e)}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
