import React from 'react';
import PropTypes from 'prop-types';
import languageContext from '../../contexts/languageContext';
import stringsModule from '../../helpers/strings';

const GuessedWords = ({ guessedWords }) => {
  const language = React.useContext(languageContext);
  const guessedWordsRows = guessedWords.map((word, index) => {
    return (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    );
  });

  const contents =
    guessedWords.length === 0 ? (
      <span data-test="guess-instruction">
        {stringsModule.getStringByLanguage(language, 'guessPrompt')}
      </span>
    ) : (
      <div data-test="guessed-words">
        <h3>{stringsModule.getStringByLanguage(language, 'guessedWords')}</h3>
        <table>
          <thead>
            <tr>
              <th>
                {stringsModule.getStringByLanguage(language, 'guessedWords')}
              </th>
              <th>
                {stringsModule.getStringByLanguage(
                  language,
                  'matchingLettersColumnHeader'
                )}
              </th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );

  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
