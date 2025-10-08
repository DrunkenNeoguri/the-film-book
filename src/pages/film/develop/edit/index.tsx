import { useParams } from '@tanstack/react-router';
import { ButtonArea } from '../components/button-area';
import PhotoList from '../components/photo-list';
import { DevelopLayout } from '../layout';

export default function Edit({ params }: { params: any }) {
  const { filmId } = useParams(params);
  return (
    <DevelopLayout>
      <p className="text-gray-50 text-base px-4 py-6">
        수정할 사진이 있다면 관련 내용을 클릭해서 수정해주세요.
      </p>
      <PhotoList />
      <ButtonArea />
    </DevelopLayout>
  );
}
