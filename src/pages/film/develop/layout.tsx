import { PropsWithChildren } from 'react';

export function DevelopLayout({ children }: PropsWithChildren) {
  return (
    // *MEMO: 웹에서도 inset 처리가 가능하다면 해당 부분 참고해서 헤더 영억 height 조정할 것
    <section className="flex flex-col w-full h-full relative">
      <div className="flex w-full h-12 bg-[#121212] text-gray-50 text-base font-semibold justify-center items-center">
        필름 내용 업로드 / 수정하기
      </div>
      <div className="flex-1 overflow-y-auto pb-20">{children}</div>
    </section>
  );
}
