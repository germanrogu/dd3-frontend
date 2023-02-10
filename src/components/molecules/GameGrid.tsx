import React from "react";
import { getLetterStatus } from "../../utils/compareStatusLetter";
import { GRID_GAMES_VALUE } from "../../utils/constants/values";
import { FieldBox } from "../atoms/FieldBox";
import { RowInputWord } from "./RowInputWord";

interface Props {
  wordSolution: string;
  wordsCompleted: string[];
  inputWord: string;
  onEnterKey: () => void;
}

export const GameGrid = ({
  wordSolution,
  wordsCompleted,
  inputWord,
  onEnterKey,
}: Props) => {
  const remainingSpaces = GRID_GAMES_VALUE - wordsCompleted.length - 1;
  const empties = Array.from(Array(Math.max(0, remainingSpaces)));

  console.log(wordSolution);

  return (
    <>
      {wordsCompleted.map((word, i) => {
        const splitWord = word.split("");
        const letterStatus = getLetterStatus(wordSolution, word);
        return (
          <div key={i} className="mb-1 flex justify-center">
            {splitWord.map((letter, j) => (
              <FieldBox key={j} value={letter} status={letterStatus[j]} />
            ))}
          </div>
        );
      })}

      {wordsCompleted.length < GRID_GAMES_VALUE && (
        <RowInputWord
          wordSolution={wordSolution}
          inputWord={inputWord}
          onEnterKey={onEnterKey}
        />
      )}

      {empties.map((_, i) => (
        <div key={i} className="mb-1 flex justify-center">
          {Array.from({ length: wordSolution.length }).map((_, j) => (
            <FieldBox key={j} />
          ))}
        </div>
      ))}
    </>
  );
};
