import { Link } from '@tanstack/react-router';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode: 'button';
};

type LinkProps = typeof Link & {
  mode: 'link';
  className?: string;
  children?: ReactNode;
  to: string;
};

export type Props = ButtonProps | LinkProps;

// *MEMO: Button으로 공용화하되, mode로 타입을 분리해서 쓰도록 정의.
// *MEMO: Link에서 추가로 분리할 부분은 하단에 분리하도록 하고, 차후에 좀 더 리팩토링하여 간결화할 수 있다면 하도록 하자.
export function Button({ mode, className, children, ...rest }: Props) {
  const buttonStyle = 'flex px-4 py-2 rounded-l justify-center items-center w-full ' + className;

  if (mode === 'button') {
    return (
      <button className={buttonStyle} {...rest}>
        {children}
      </button>
    );
  } else if (mode === 'link') {
    const { to } = { ...rest } as LinkProps;

    return (
      <Link className={buttonStyle} to={to}>
        {children}
      </Link>
    );
  }
}
