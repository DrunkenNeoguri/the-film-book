import { ButtonHTMLAttributes } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement>;

// *MEMO: Link 버튼도 동일하게 쓸 거기 때문에 Link와 Button을 어떻게 분리할지에 대해서도 생각해보도록 합시다.
export function Button({ className, children, ...rest }: Props) {
  const buttonStyle = 'flex px-4 py-2 rounded-l justify-center items-center w-full ' + className;
  return (
    <button className={buttonStyle} {...rest}>
      {children}
    </button>
  );
}
