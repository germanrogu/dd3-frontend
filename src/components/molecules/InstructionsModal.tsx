import { FieldBox } from "../atoms/FieldBox";
import { ModalBase } from "./ModalBase";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export const InstructionsModal = ({ isOpen, handleClose }: Props) => {
  return (
    <ModalBase
      buttonText="!JUGAR¡"
      title="Cómo jugar"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="px-4 py-1 text-justify text-sm text-gray-800 dark:text-gray-100">
        Adivina la palabra oculta en cinco intentos.
      </p>
      <p className="px-4 py-1 text-justify text-sm text-gray-800 dark:text-gray-100">
        Cada intento debe ser una palabra válida de 5 letras.
      </p>
      <p className="px-4 pb-2 pt-1 text-justify text-sm text-gray-800 dark:text-gray-100">
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </p>
      <p className="px-4 py-1 text-left text-sm font-bold text-gray-800 dark:text-gray-100">
        Ejemplos
      </p>
      <div className="mb-2 mt-2 flex justify-center">
        <FieldBox value="G" status="correct" />
        <FieldBox value="A" />
        <FieldBox value="T" />
        <FieldBox value="O" />
        <FieldBox value="S" />
      </div>
      <p className="px-4 py-2 text-justify text-sm text-gray-800 dark:text-gray-100">
        La letra <b>G</b> está en la palabra y en la posición correcta.
      </p>
      <div className="mb-2 mt-2 flex justify-center">
        <FieldBox value="V" />
        <FieldBox value="O" />
        <FieldBox value="C" status="present" />
        <FieldBox value="A" />
        <FieldBox value="L" />
      </div>
      <p className="px-4 py-2 text-justify text-sm text-gray-800 dark:text-gray-100">
        La letra <b>C</b> está en la palabra pero en la posicion incorrecta.
      </p>
      <div className="mb-2 mt-2 flex justify-center">
        <FieldBox value="C" />
        <FieldBox value="A" />
        <FieldBox value="N" />
        <FieldBox value="T" />
        <FieldBox value="O" status="absent" />
      </div>
      <p className="px-4 py-2 text-justify text-sm text-gray-800 dark:text-gray-100">
        La letra <b>O</b> no está en la palabra.
      </p>
      <p className="px-4 pb-1 pt-3 text-justify text-sm text-gray-800 dark:text-gray-100">
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </p>
      <p className="px-4 py-2 text-center text-sm text-gray-800 dark:text-gray-100">
        ¡Una palabra nueva cada 5 minutos!
      </p>
    </ModalBase>
  );
};
