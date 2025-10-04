import { Link } from '@tanstack/react-router';

export default function MovePageArea() {
  return (
    <div>
      {/* 차후에 버튼화하기 */}
      <Link to="/film/develop">발자취 기록하기</Link>
      <Link to="/film">다른 사람의 발자취 구경하기</Link>
    </div>
  );
}
