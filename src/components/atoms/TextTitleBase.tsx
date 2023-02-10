import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface Props {
  children: React.ReactNode;
}

export const TextTitleBase = ({ children }: Props) => {
  return (
    <Title
      level={4}
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#722f37",
        paddingBottom: "0rem",
      }}
    >
      {children}
    </Title>
  );
};
