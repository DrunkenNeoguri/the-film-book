import { useState } from 'react';
import { ALLOWED_IMAGE_EXTENSION } from '../../utils/constants';

type Props = {
  existingImage?: File;
  existingImageUrl?: string;
};

export function useImageUpload({ existingImage, existingImageUrl }: Props) {
  const [imageFile, setImageFile] = useState<File | null>(existingImage ?? null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | undefined>(existingImageUrl);

  const loadImageFile = (file: File) => {
    if (!ALLOWED_IMAGE_EXTENSION.includes(file?.type)) {
      throw new Error('이미지 파일은 jpg, jpeg, png, webp만 가능합니다.');
    }

    const selectedImageUrl = URL.createObjectURL(file);
    setImageFile(file);
    setPreviewImageUrl(selectedImageUrl);
  };

  return { previewImageUrl, loadImageFile };
}
