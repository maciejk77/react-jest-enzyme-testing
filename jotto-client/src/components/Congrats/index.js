import React from 'react';
import PropTypes from 'prop-types';

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

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
