const languageStrings = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching Letters',
  },
  pl: {
    congrats: 'Gratulacje! Zgadles slowo!',
    submit: 'Wyslij',
    guessPrompt: 'Sprobuj zgadnac slowo',
    guessInputPlaceholder: 'Podaj swoj typ',
    guessColumnHeader: 'Odgadniete slowa',
    guessedWords: 'Ilosc odgadniec',
    matchingLettersColumnHeader: 'Pasujace litery',
  },
};

const getStringByLanguage = (
  languageCode,
  stringKey,
  strings = languageStrings
) => {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`);
    return strings.en[stringKey];
  }
  return strings[languageCode][stringKey];
};

export default {
  getStringByLanguage,
};
