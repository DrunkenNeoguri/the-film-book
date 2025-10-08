import { Activity, ChangeEvent } from 'react';
import { AddIcon } from '../../assets/icon';
import { MONTHS } from '../../utils/constants';
import { useImageUpload } from './use-image-upload';

// *MEMO: 전체에서 이미지 리스트를 가져올 사항이 필요해보인다.
type Props = {
  month: (typeof MONTHS)[number];
  existingImage?: File;
  existingImageUrl?: string;
  onUpload: (file: File) => void;
};

export default function ImageUploader({ month, existingImage, existingImageUrl, onUpload }: Props) {
  const { previewImageUrl, loadImageFile } = useImageUpload({
    existingImage,
    existingImageUrl,
  });

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (!selectedImage) {
      return;
    }

    loadImageFile(selectedImage);
    onUpload(selectedImage);
  };

  return (
    <div className="flex relative w-full h-36 border-amber-400 border-4 rounded-xl">
      <label htmlFor={month} className="flex justify-around items-center cursor-pointer w-full">
        <Activity mode={!previewImageUrl ? 'visible' : 'hidden'}>
          <AddIcon width={48} height={48} className="mb-2" />
        </Activity>
        <Activity mode={previewImageUrl ? 'visible' : 'hidden'}>
          <img src={previewImageUrl} />
        </Activity>
      </label>
      <input
        id={month}
        onChange={handleImageUpload}
        type="file"
        accept="image/jpeg, image/jpg, image/png, image/webp"
        className="hidden"
      />
      <div className="flex absolute bottom-0 w-full justify-center items-center rounded-b-lg bg-amber-400 text-[#19181D] text-semibold text-base">
        <span>{month}</span>
      </div>
    </div>
  );
}
