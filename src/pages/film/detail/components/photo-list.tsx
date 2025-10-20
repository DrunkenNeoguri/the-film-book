export function PhotoList() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="w-full h-full bg-gray-500">
          <img src="" alt="photo" />
        </div>
      ))}
    </div>
  );
}
