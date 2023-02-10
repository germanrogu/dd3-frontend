import classNames from "classnames";
import React from "react";

interface Props {
  value?: string;
  status?: "nada" | "presente" | "correcto";
}

export const FieldBox = ({ value, status }: Props) => {
  const baseClasses =
    "text-black w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded";
  const darkClasses = "dark:text-white dark:bg-zinc-600 dark:border-zinc-600";

  const classes = classNames(baseClasses, darkClasses, {
    "bg-white border-slate-200": !status,
    "border-black": value && !status,
    "bg-green-600 text-white border-green-600 shadowed": status === "correcto",
    "bg-slate-400 text-white border-slate-400 shadowed": status === "nada",
    "bg-yellow-400 text-white border-yellow-400 shadowed":
      status === "presente",
    "dark:bg-slate-700 dark:border-slate-700": status === "nada",
  });

  return (
    <div className={classes}>
      <div>{value}</div>
    </div>
  );
};
