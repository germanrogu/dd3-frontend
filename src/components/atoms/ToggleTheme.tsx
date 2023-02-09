import React, { Dispatch } from "react";
import { Switch } from "antd";

interface toggleProps {
  darkToggle: boolean;
  setDarkToggle: Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleTheme = ({ darkToggle, setDarkToggle }: toggleProps) => {
  return <Switch defaultChecked onChange={() => setDarkToggle(!darkToggle)} />;
};
