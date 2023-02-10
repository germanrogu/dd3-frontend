import React from "react";
import { TextTitleBase } from "../atoms/TextTitleBase";
import { Timer } from "../atoms/Timer";
import { ModalBase } from "./ModalBase";

interface Props {
  showModal: boolean;
  hideModal: () => void;
  minutes: number;
  counterVictory: number;
  counterGames: number;
}

export const StatisticsModal = ({
  minutes,
  counterVictory,
  counterGames,
  showModal,
  hideModal,
}: Props) => {
  return (
    <ModalBase
      buttonText="Aceptar"
      title="Estadísticas"
      showModal={showModal}
      hideModal={hideModal}
    >
      <div className="flex py-4 flex-row flex-nowrap justify-center ">
        <p className="px-4 text-center font-bold text-sm text-gray-800 dark:text-gray-100">
          Jugadas
        </p>
        <TextTitleBase>{counterGames}</TextTitleBase>
        <p className="px-4  font-bold text-sm text-gray-800 dark:text-gray-100">
          Victorias
        </p>
        <TextTitleBase>{counterVictory}</TextTitleBase>
      </div>

      <p className="px-4 py-1 text-center font-bold text-sm text-gray-800 dark:text-gray-100">
        Siguiente palabra
      </p>
      <Timer
        minutes={Math.floor(minutes / 60)}
        seconds={minutes - Math.floor(minutes / 60) * 60}
      />
    </ModalBase>
  );
};
