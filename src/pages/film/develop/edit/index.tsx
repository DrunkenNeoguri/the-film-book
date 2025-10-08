import { useParams } from '@tanstack/react-router';
import { ButtonArea } from '../components/button-area';
import PhotoList from '../components/photo-list';

export default function Edit({ params }) {
  const { filmId } = useParams(params);
  return (
    <section>
      <p>수정할 사진이 있다면 관련 내용을 클릭해서 수정해주세요.</p>
      <PhotoList />
      <ButtonArea />
    </section>
  );
}
