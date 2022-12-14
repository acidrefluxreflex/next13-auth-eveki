export default function WindowMockup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl transition-colors ease-linear shadow-lg rounded-b-lg">
      <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
        <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
        <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
        <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
      </div>
      <div className="rounded-b-lg">
        {children}
      </div>
    </div>
  );
}
