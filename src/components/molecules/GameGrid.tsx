import React from "react";
import { getLetterStatus } from "../../utils/compareStatusLetter";
import { FieldBox } from "../atoms/FieldBox";
import { RowInputWord } from "./RowInputWord";
interface Props {
  wordSolution: string;
  wordsCompleted: string[];
  inputWord: string;
}

export const GameGrid = ({
  inputWord,
  wordSolution,
  wordsCompleted,
}: Props) => {
  const rowsEmpties =
    wordsCompleted.length < 5
      ? new Array(5 - wordsCompleted.length).fill(undefined)
      : [];

  console.log(wordSolution);

  return (
    <>
      {wordsCompleted.length < 4 && (
        <RowInputWord wordSolution={wordSolution} inputWord={inputWord} />
      )}

      {wordsCompleted.map((word, i) => {
        const splitWord = word.split("");

        const letterStatus = getLetterStatus(wordSolution, word);
        console.log(letterStatus);

        return (
          <div key={i} className="mb-1 flex justify-center">
            {splitWord.map((letter, i) => (
              <FieldBox key={i} value={letter} status={letterStatus[i]} />
            ))}
          </div>
        );
      })}
      {rowsEmpties.map((_, i) => {
        return (
          <div key={i} className="mb-1 flex justify-center">
            {Array.from(Array(wordSolution.length)).map((_, i) => (
              <FieldBox key={i} />
            ))}
          </div>
        );
      })}
    </>
  );
};
