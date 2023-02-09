import React from "react";
import { ModalBase } from "./ModalBase";

interface Props {
  showModal: boolean;
  hideModal: () => void;
}

export const StatisticsModal = ({ showModal, hideModal }: Props) => {
  return (
    <ModalBase
      buttonText="Aceptar"
      title="Estadísticas"
      showModal={showModal}
      hideModal={hideModal}
    >
      <></>
    </ModalBase>
  );
};
