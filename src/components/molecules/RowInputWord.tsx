import React from "react";
import { FieldBox } from "../atoms/FieldBox";

interface Props {
  inputWord: string;
  wordSolution: string;
}

export const RowInputWord = ({ inputWord, wordSolution }: Props) => {
  const count = wordSolution.length - inputWord.split("").length;
  const fieldsEmpty = Array.from(Array(count)).map((_, i) => (
    <FieldBox key={i} />
  ));

  return (
    <div className={"flex justify-center mb-1"}>
      {inputWord.split("").map((word, i) => (
        <FieldBox key={i} value={word} />
      ))}
      {fieldsEmpty}
    </div>
  );
};
