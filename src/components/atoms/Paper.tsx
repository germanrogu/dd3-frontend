interface Prop {
  children: React.ReactNode;
}

export const Paper = ({ children }: Prop) => {
  return (
    <div className="w-auto rounded overflow-hidden bg-zinc-200 p-4 mt-1 mb-1 mx-auto text-white dark:bg-zinc-800">
      {children}
    </div>
  );
};
