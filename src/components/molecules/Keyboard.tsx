import React, { useEffect } from "react";
import { Key } from "../atoms/Key";

interface Props {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  // solution: string;
  // guesses: string[];
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
}: // solution,
// guesses,
Props) => {
  const onClick = (value: string) => {
    if (value === "ENTER") {
      onEnter();
    } else if (value === "DELETE") {
      onDelete();
    } else {
      console.log(value);
      onChar(value);
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        onEnter();
      } else if (e.code === "Backspace") {
        onDelete();
      } else {
        console.log(e.key);
        const key = e.key.toUpperCase();
        // TODO: check this test if the range works with non-english letters
        if (key.length === 1 && key >= "A" && key <= "Z") {
          onChar(key);
        }
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onEnter, onDelete, onChar]);

  return (
    <div>
      <div className="mb-1 flex justify-center">
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
          <Key value={key} key={key} onClick={onClick} />
        ))}
      </div>
      <div className="mb-1 flex justify-center">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
          <Key value={key} key={key} onClick={onClick} />
        ))}
      </div>
      <div className="flex justify-center">
        <Key value="ENTER" onClick={onClick}>
          {"ENTER"}
        </Key>
        {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
          <Key value={key} key={key} onClick={onClick} />
        ))}
        <Key value="DELETE" onClick={onClick}>
          {"DELETE"}
        </Key>
      </div>
    </div>
  );
};
