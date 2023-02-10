interface Props {
  children?: React.ReactNode;
  value: string;
  onClick: (value: string) => void;
}
export const Key = ({ children, value, onClick }: Props) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value);
    event.currentTarget.blur();
  };

  return (
    <button
      className={
        "w-24 h-12 mx-1 md:w-20 md:h-12 flex items-center justify-center rounded md:mx-0.5 text-xs font-bold bg-zinc-200 dark:bg-zinc-600 border-slate-200 dark:border-zinc-600 cursor-pointer select-none dark:text-white"
      }
      onClick={handleClick}
    >
      {children || value}
    </button>
  );
};
