import React from "react";
import { Switch } from "antd";

interface toggleProps {
  darkToggle: boolean;
  darkMode: (dark: boolean) => void;
}

export const ToggleTheme = ({ darkToggle, darkMode }: toggleProps) => {
  return (
    <Switch
      style={{ boxShadow: "0px 0px 4px 2px rgba(171,171,171,0.35)" }}
      checked={darkToggle}
      onChange={darkMode}
    />
  );
};
