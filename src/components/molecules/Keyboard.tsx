import React, { useEffect } from "react";
import { Key } from "../atoms/Key";

interface Props {
  onAnyKey: (value: string) => void;
  onDeleteKey: () => void;
  onEnterKey: () => void;
  // solution: string;
  // guesses: string[];
}

export const Keyboard = ({
  onAnyKey,
  onDeleteKey,
  onEnterKey,
}: // solution,
// guesses,
Props) => {
  const onClick = (value: string) => {
    switch (value) {
      case "ENTER":
        onEnterKey();
        break;
      case "DELETE":
        onDeleteKey();
        break;
      default:
        onAnyKey(value);
        break;
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      switch (e.code) {
        case "Enter":
          onEnterKey();
          break;
        case "Backspace":
          onDeleteKey();
          break;
        default:
          const key = e.key.toUpperCase();
          if (key.length === 1 && key >= "A" && key <= "Z") {
            onAnyKey(key);
          }
          break;
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onEnterKey, onDeleteKey, onAnyKey]);

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
