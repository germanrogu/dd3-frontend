import React from "react";
import { FieldBox } from "../atoms/FieldBox";
interface Props {
  wordSolution: string;
  wordsCompleted: string[];
}

export const GameGrid = ({ wordSolution, wordsCompleted }: Props) => {
  const rowsEmpties =
    wordsCompleted.length < 5
      ? new Array(5 - wordsCompleted.length).fill(undefined)
      : [];

  console.log(wordSolution);

  return (
    <>
      {wordsCompleted.map((word, i) => {
        const splitWord = word.split("");
        return (
          <div key={i} className="mb-1 flex justify-center">
            {splitWord.map((letter, i) => (
              <FieldBox key={i} value={letter} />
            ))}
          </div>
        );
      })}

      {rowsEmpties.map((_, i) => {
        return (
          <div key={i} className="mb-1 flex justify-center">
            {Array.from(Array(5)).map((_, i) => (
              <FieldBox key={i} />
            ))}
          </div>
        );
      })}
    </>
  );
};
