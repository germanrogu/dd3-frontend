interface Prop {
  children: React.ReactNode;
  clickFunction: () => void;
  type?: string;
}

export const ButtonModal = ({ children, clickFunction, type }: Prop) => {
  return (
    <button
      className={`${
        type === "circle" && "rounded-full"
      } text-2xl flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800`}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
};
