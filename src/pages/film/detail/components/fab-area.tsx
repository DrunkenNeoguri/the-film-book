import FAB from '../../../../components/fab/fab';

// *MEMO: 좋아요 기록 남기도록 할 것 - 여러 번 눌러도 한번만 전달되도록. (쓰로틀링)
// *MEMO: 신고버튼 누르면 모달 노출

export function FABArea() {
  return (
    <div className="flex flex-col gap-4 absolute b-4 r-4">
      <FAB text="좋아요" />
      <FAB text="신고" />
    </div>
  );
}
