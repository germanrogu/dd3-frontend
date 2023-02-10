import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export const Timer = ({ minutes = 0, seconds = 0 }) => {
  return (
    <>
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
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Title>
      {/* <Title
            level={4}
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontWeight: "bold",
              color: "#722f37",
              paddingBottom: "2rem",
            }}
          >
            You can open another pack in 60 seconds
          </Title> */}
    </>
  );
};
