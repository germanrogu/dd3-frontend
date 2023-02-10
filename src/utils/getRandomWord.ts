import { DICTIONARY } from "./constants/Dictionary";
import { GRID_GAMES_VALUE } from "./constants/values";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const getRandomWord = (): Promise<string> => {
  const index = getRandomInt(DICTIONARY.length - 1);
  if (index < 0) {
    throw new Error("Invalid index");
  }
  const word = DICTIONARY[index % DICTIONARY.length].toUpperCase();
  return new Promise<string>((resolve) => {
    return resolve(word);
  }).then((word: string) => {
    if (word.length === GRID_GAMES_VALUE) {
      return removeAccents(word);
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
