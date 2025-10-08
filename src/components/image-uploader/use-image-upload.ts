import { ChangeEvent, useState } from 'react';
import { ALLOWED_IMAGE_EXTENSION } from '../../utils/constants';

export function useImageUpload() {
  const [imageFile, setImageFile] = useState<File | null>();
  const [previewImageUrl, setPreviewImageUrl] = useState<string>();

  const loadImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];

    if (!selectedImage) {
      return;
    }

    if (!ALLOWED_IMAGE_EXTENSION.includes(selectedImage?.type)) {
      return '이미지 파일은 jpg, jpeg, png, webp만 가능합니다.';
    }

    const selectedImageUrl = URL.createObjectURL(selectedImage);
    setImageFile(selectedImage);
    setPreviewImageUrl(selectedImageUrl);
  };

  return { imageFile, previewImageUrl, loadImageFile };
}
