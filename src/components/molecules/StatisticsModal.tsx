import { ModalBase } from "./ModalBase";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export const StatisticsModal = ({ isOpen, handleClose }: Props) => {
  return (
    <ModalBase
      buttonText="Aceptar"
      title="Estadísticas"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <></>
    </ModalBase>
  );
};
