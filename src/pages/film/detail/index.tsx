//*MEMO: 필요한 것들?
//*MEMO: 필름 영역, 클릭할 때의 폴라로이드 모달, 좋아요 버튼, 신고 버튼 정도만.
//*MEMO: 사진 못 퍼가게 마우스 우클릭 막을 것. (그래도 퍼갈 사람은 퍼가겠지만...)

import { FABArea, FilmBase } from './components';

export default function Detail() {
  return (
    <section className="relative">
      <FilmBase />
      <FABArea />
    </section>
  );
}
