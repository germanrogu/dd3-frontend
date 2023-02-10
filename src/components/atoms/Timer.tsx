import React from "react";
import { TextTitleBase } from "./TextTitleBase";

export const Timer = ({ minutes = 0, seconds = 0 }) => {
  return (
    <TextTitleBase>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </TextTitleBase>
  );
};
