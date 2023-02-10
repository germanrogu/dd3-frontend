type letterStatus = "nada" | "presente" | "correcto";

export const getLetterStatus = (
  wordSolution: string,
  word: string
): letterStatus[] => {
  const splitSolution = wordSolution.split("");
  const splitGuess = word.split("");
  const statuses: letterStatus[] = Array.from(Array(word.length));

  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = "correcto";
    } else if (!splitSolution.includes(letter)) {
      statuses[i] = "nada";
    } else {
      const indexOfPresentLetter = splitSolution.findIndex((x) => x === letter);
      if (indexOfPresentLetter > -1) {
        statuses[i] = "presente";
        splitSolution[indexOfPresentLetter] = "";
      } else {
        statuses[i] = "nada";
      }
    }
  });

  return statuses;
};
