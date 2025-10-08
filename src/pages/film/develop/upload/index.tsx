import { ButtonArea } from '../components/button-area';
import PhotoList from '../components/photo-list';
import { DevelopLayout } from '../layout';

export default function Upload() {
  //*MEMO: 제목은 필요없음. ~ 님의 필름 이라고 남길것.
  return (
    <DevelopLayout>
      <p className="text-gray-50 text-base px-4 py-6 whitespace-pre-wrap">
        {`각 이미지 칸에 올 한 해, 1월부터 12월까지의\n발자취를 남겨볼까요?`}
      </p>
      <PhotoList />
      <ButtonArea />
    </DevelopLayout>
  );
}
