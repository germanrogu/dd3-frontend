interface Prop {
  children: React.ReactNode;
  clickFunction: () => void;
  type?: string;
  className: string;
}

export const ButtonModal = ({
  children,
  clickFunction,
  type,
  className,
}: Prop) => {
  return (
    <button
      className={`${
        type === "circle" && "rounded-full"
      } ${className} text-2xl flex items-center bg-zinc-200 hover:bg-zinc-300 text-gray-800`}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
};
