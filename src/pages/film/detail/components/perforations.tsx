export function Perforations({ length }: { length: number }) {
  return (
    <div className="left-0 top-0 bottom-0 w-[7.14%] bg-black flex flex-col items-center pt-2 gap-6 z-10">
      {Array.from({ length: length }).map((_, index) => (
        <div key={`left-${index}`} className="w-8 h-6 bg-gray-900 border border-gray-700 rounded" />
      ))}
    </div>
  );
}
