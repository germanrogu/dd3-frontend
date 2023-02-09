import { ButtonModal } from "../atoms/ButtonModal";
import { GameTitle } from "../atoms/GameTitle";
import { ToggleTheme } from "../atoms/ToggleTheme";
import { QuestionCircleOutlined, BarChartOutlined } from "@ant-design/icons";
import { Dispatch } from "react";

interface Props {
  darkToggle: boolean;
  setDarkToggle: Dispatch<React.SetStateAction<boolean>>;
  showInstructions: () => void;
  showStatistics: () => void;
}

export const PrincipalBar = ({
  darkToggle,
  setDarkToggle,
  showInstructions,
  showStatistics,
}: Props) => {
  return (
    <div className="max-w-lg flex flex-row flex-nowrap justify-center items-center">
      <ButtonModal
        className={"mx-10"}
        clickFunction={showInstructions}
        type={"circle"}
      >
        <QuestionCircleOutlined />
      </ButtonModal>
      <GameTitle />
      <ButtonModal className={"mx-10"} clickFunction={showStatistics}>
        <BarChartOutlined />
      </ButtonModal>
      <ToggleTheme darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
    </div>
  );
};
