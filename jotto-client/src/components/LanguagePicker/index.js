import React from 'react';

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: 'en', symbol: 'ENG' },
    { code: 'pl', symbol: 'POL' },
  ];

  const languagesIcons = languages.map((lang) => (
    <span
      data-test="language-icon"
      key={lang.code}
      onClick={() => setLanguage(lang.code)}
    >
      [{lang.symbol}]
    </span>
  ));
  return <div data-test="component-language-picker">{languagesIcons}</div>;
};

export default LanguagePicker;
