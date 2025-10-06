//*MEMO: 기능 역할과 디자인은 서로 별개로 둘 것.
//*MEMO: 그런 의미에서 외부에서 기능 사항을 받아서 반영할 것.

import { MONTHS } from '../../utils/constants';

type Props = {
  month: (typeof MONTHS)[number];
};

export default function ImageUploader({ month }: Props) {
  return (
    <div className="flex relative w-full h-36 border-amber-400 border-4 rounded-xl">
      {/* 해당 영역에서 이미지가 나오도록 함 */}
      <label htmlFor={month}></label>
      <input id={month} type="file" />
      <div className="flex absolute bottom-0 w-full justify-center items-center rounded-b-lg bg-amber-400 text-[#19181D] text-semibold text-base">
        <span>{month}</span>
      </div>
    </div>
  );
}
