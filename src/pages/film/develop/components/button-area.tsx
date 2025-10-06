import { Activity } from 'react';
import { useRouterState } from '@tanstack/react-router';
import Button from '../../../../components/button/button';

export function ButtonArea() {
  const { location } = useRouterState();
  const { pathname } = location;

  // *MEMO: pathname 말고 mode로 수정하던지 결정할 것
  return (
    <div className="flex absolute bottom-0 z-10 w-full px-4 py-2 bg-[#121212]">
      <Activity mode={pathname.includes('develop') ? 'visible' : 'hidden'}>
        <Button mode="button" className="bg-amber-500 text-gray-50">
          필름 생성
        </Button>
      </Activity>
      <Activity mode={pathname.includes('develop/') ? 'visible' : 'hidden'}>
        <Button mode="button" className="bg-gray-800 text-white">
          내 필름 삭제
        </Button>
        <Button mode="button" className="bg-amber-500 text-gray-300">
          내 필름 등록
        </Button>
      </Activity>
    </div>
  );
}
