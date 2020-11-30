import React from 'react';
import PropTypes from 'prop-types';
import languageContext from '../../contexts/languageContext';
import stringsModule from '../../helpers/strings';

const Congrats = ({ success }) => {
  const language = React.useContext(languageContext);
  return success ? (
    <div data-test="component-congrats">
      <span data-test="component-message">
        {stringsModule.getStringByLanguage(language, 'congrats')}
      </span>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
