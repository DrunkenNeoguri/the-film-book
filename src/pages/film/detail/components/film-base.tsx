// ?CONCERN: 12개의 사진 수만큼 늘리면 필름 걸이 부분도 자동으로 늘릴 수 있을까?
import { Perforations, PhotoList } from '.';

export function FilmBase() {
  return (
    <div>
      <Perforations length={170} />
      <PhotoList />
      <Perforations length={170} />
    </div>
  );
}
