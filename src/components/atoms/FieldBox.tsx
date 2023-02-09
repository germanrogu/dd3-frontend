import classNames from "classnames";

interface Props {
  value?: string;
  status?: "absent" | "present" | "correct";
}

export const FieldBox = ({ value, status }: Props) => {
  const classes = classNames(
    "text-black w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white",
    {
      "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600":
        !status,
      "border-black dark:border-slate-100": value && !status,
      "absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700":
        status === "absent",
      "correct shadowed bg-green-500 text-white border-green-500":
        status === "correct",
      "present shadowed bg-yellow-500 text-white border-yellow-500":
        status === "present",
    }
  );

  return (
    <div className={classes} style={{ animationDelay: "100ms" }}>
      <div className="letter-container" style={{ animationDelay: "100ms" }}>
        {value}
      </div>
    </div>
  );
};
