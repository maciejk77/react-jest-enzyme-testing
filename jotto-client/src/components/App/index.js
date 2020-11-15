import React from 'react';
import GuessedWords from '../GuessedWords';
import Congrats from '../Congrats';
import Input from '../Input';

const App = () => {
  return (
    <div>
      <h1>Jotto</h1>
      <Input />
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
