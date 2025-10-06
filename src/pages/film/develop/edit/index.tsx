import { useParams } from '@tanstack/react-router';
import ImageUploader from '../../../../components/image-uploader/image-uploader';
import { ButtonArea } from '../components/button-area';
import { MONTHS } from '../../../../utils/constants';

export default function Edit({ params }) {
  const { filmId } = useParams(params);
  return (
    <section>
      <p>수정할 사진이 있다면 관련 내용을 클릭해서 수정해주세요.</p>
      <div className="grid grid-cols-2 gap-4 px-4">
        {MONTHS.map(month => {
          return <ImageUploader key={month} month={month} />;
        })}
      </div>
      <ButtonArea />
    </section>
  );
}
