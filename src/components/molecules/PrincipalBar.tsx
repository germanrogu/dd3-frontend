import { ButtonModal } from "../atoms/ButtonModal";
import { GameTitle } from "../atoms/GameTitle";
import { ToggleTheme } from "../atoms/ToggleTheme";
import { QuestionCircleOutlined, BarChartOutlined } from "@ant-design/icons";
import { Dispatch } from "react";

interface Props {
  darkToggle: boolean;
  setDarkToggle: Dispatch<React.SetStateAction<boolean>>;
  setIsInfoModalOpen: Dispatch<React.SetStateAction<boolean>>;
  setIsStatsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const PrincipalBar = ({
  darkToggle,
  setDarkToggle,
  setIsInfoModalOpen,
  setIsStatsModalOpen,
}: Props) => {
  return (
    <div className="flex flex-row flex-nowrap justify-center items-center align-center">
      <ButtonModal
        className={"mx-10"}
        clickFunction={() => setIsInfoModalOpen(true)}
        type={"circle"}
      >
        <QuestionCircleOutlined />
      </ButtonModal>
      <GameTitle />
      <ButtonModal
        className={"mx-10"}
        clickFunction={() => setIsStatsModalOpen(true)}
      >
        <BarChartOutlined />
      </ButtonModal>
      <ToggleTheme darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
    </div>
  );
};
