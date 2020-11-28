import stringsModule from './strings';
const { getStringByLanguage } = stringsModule;

const strings = {
  en: { submit: 'submit' },
  pl: { submit: 'wyslij' },
  lg: {},
};

describe('language string testing', () => {
  const mockWarn = jest.fn();
  let originalWarn;

  beforeEach(() => {
    originalWarn = console.warn;
    console.warn = mockWarn;
  });

  afterEach(() => {
    console.warn = originalWarn;
  });

  it('returns correct submit string for English', () => {
    const string = getStringByLanguage('en', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  it('returns correct submit string for Polish', () => {
    const string = getStringByLanguage('pl', 'submit', strings);
    expect(string).toBe('wyslij');
    expect(mockWarn).not.toHaveBeenCalled();
  });

  it('returns English submit string when language does not exist', () => {
    const string = getStringByLanguage('dummyLanguage', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenLastCalledWith(
      'Could not get string [submit] for [dummyLanguage]'
    );
  });

  it('returns English submit string when submit key does not exist for language', () => {
    const string = getStringByLanguage('lg', 'submit', strings);
    expect(string).toBe('submit');
    expect(mockWarn).toHaveBeenCalledWith(
      'Could not get string [submit] for [lg]'
    );
  });
});

// it('shows dummy waring test', () => {
//   console.warn('WARNING!!!!');
// });
