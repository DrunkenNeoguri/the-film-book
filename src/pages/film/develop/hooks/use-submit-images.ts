import { useState } from 'react';
import { MONTHS } from '../../../../utils/constants';

type ImageFiles = {
  [K in (typeof MONTHS)[number]]?: File;
};

export function useSubmitImages() {
  const [imageList, setImageList] = useState<ImageFiles>({});
  const handleUploadImage = ({ month, file }: { month: (typeof MONTHS)[number]; file: File }) => {
    setImageList(prev => ({ ...prev, [month]: file }));
  };

  return { imageList, handleUploadImage };
}
