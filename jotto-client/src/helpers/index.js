import GuessedWords from '../components/GuessedWords';

export const getLetterMatchCount = (guessWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessWord.split(''));

  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
};
