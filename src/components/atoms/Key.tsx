interface Props {
  children?: React.ReactNode;
  value: string;
  onClick: (value: string) => void;
}
export const Key = ({ children, value, onClick }: Props) => {
  const styles = {
    transitionDelay: `100ms`,
    width: `60px`,
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value);
    event.currentTarget.blur();
  };

  return (
    <button
      style={styles}
      //   aria-label={`${value}${status ? " " + status : ""}`}
      className={
        "flex h-14 items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white"
      }
      onClick={handleClick}
    >
      {children || value}
    </button>
  );
};
