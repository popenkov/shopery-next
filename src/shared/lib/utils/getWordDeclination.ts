export const getWordDeclination = (amount: number, words: [string, string]): string => {
  return amount === 1 ? words[0] : words[1];
};
