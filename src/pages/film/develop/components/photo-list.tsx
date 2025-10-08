import ImageUploader from '../../../../components/image-uploader/image-uploader';
import { MONTHS } from '../../../../utils/constants';

export default function PhotoList() {
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {MONTHS.map(month => {
        return <ImageUploader key={month} month={month} />;
      })}
    </div>
  );
}
