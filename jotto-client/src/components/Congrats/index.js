import React from 'react';

const Congrats = ({ success }) =>
  success ? (
    <div data-test="component-congrats">
      <span data-test="component-message">
        Congratulations! You guessed the word!
      </span>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );

export default Congrats;
