import React from "react";
import { FieldBox } from "../atoms/FieldBox";

interface Props {
  inputWord: string;
  wordSolution: string;
  onEnterKey: () => void;
}

export const RowInputWord = ({
  inputWord,
  wordSolution,
  onEnterKey,
}: Props) => {
  const count = wordSolution.length - inputWord.split("").length;
  const fieldsEmpty = Array.from(Array(count)).map((_, i) => (
    <FieldBox key={i} />
  ));

  if (inputWord.length === 5)
    setTimeout(() => {
      onEnterKey();
    }, 400);

  return (
    <div className={"flex justify-center mb-1"}>
      {inputWord.split("").map((word, i) => (
        <FieldBox key={i} value={word} />
      ))}
      {fieldsEmpty}
    </div>
  );
};
