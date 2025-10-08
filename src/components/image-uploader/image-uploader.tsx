//*MEMO: 기능 역할과 디자인은 서로 별개로 둘 것.
//*MEMO: 그런 의미에서 외부에서 기능 사항을 받아서 반영할 것.

import { AddIcon } from '../../assets/icon';
import { MONTHS } from '../../utils/constants';

type Props = {
  month: (typeof MONTHS)[number];
};

export default function ImageUploader({ month }: Props) {
  return (
    <div className="flex relative w-full h-36 border-amber-400 border-4 rounded-xl">
      <label htmlFor={month} className="flex justify-around items-center cursor-pointer w-full">
        <AddIcon width={48} height={48} className="mb-2" />
      </label>
      <input
        id={month}
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
