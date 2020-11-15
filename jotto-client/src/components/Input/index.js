import React from 'react';
import { connect, useSelector } from 'react-redux';

const Input = ({ success }) => {
  const contents = success ? null : (
    <form>
      <input data-test="input-box" type="text" placeholder="enter guess" />
      <button data-test="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
  return <div data-test="component-input">{contents}</div>;
};

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
