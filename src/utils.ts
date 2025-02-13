import { ALPHABET } from "./constants";

export const getRandomNumber = (limit: number) =>
  Math.floor(Math.random() * limit);

export const getRandomLetter = () => {
  const position = getRandomNumber(ALPHABET.length - 1);
  const value = ALPHABET[position];
  return value;
};
