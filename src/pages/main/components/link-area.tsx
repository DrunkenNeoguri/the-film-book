import Button from '../../../components/button/button';

export function LinkArea() {
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <Button
        mode="link"
        to="/film/develop"
        className="bg-amber-700 text-gray-100 text-sm font-medium"
      >
        발자취 기록하기
      </Button>
      <Button mode="link" to="/film" className="bg-gray-50 text-gray-700 text-sm font-medium">
        다른 사람의 발자취 구경하기
      </Button>
    </div>
  );
}
