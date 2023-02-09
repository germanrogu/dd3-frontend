interface Prop {
  children: React.ReactNode;
}

export const Paper = ({ children }: Prop) => {
  return (
    <div className="max-w-lg rounded overflow-hidden bg-gray-200 p-5 rounded-lg mt-10 text-white dark:bg-gray-900">
      {children}
    </div>
  );
};
