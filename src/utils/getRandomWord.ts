import { DICTIONARY } from "./constants/Dictionary";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomWord = (): Promise<string> => {
  const index = getRandomInt(DICTIONARY.length - 1);
  if (index < 0) {
    throw new Error("Invalid index");
  }
  const word = DICTIONARY[index % DICTIONARY.length].toUpperCase();
  return new Promise<string>((resolve) => {
    return resolve(word);
  }).then((word: string) => {
    if (word.length === 5) {
      return word;
    } else {
      return getRandomWord();
    }
  });
};

export const getSolution = () => {
  return {
    solution: getRandomWord().then((response: string) => response),
  };
};

export const { solution } = getSolution();
