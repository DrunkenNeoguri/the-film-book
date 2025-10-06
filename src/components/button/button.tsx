import { Link } from '@tanstack/react-router';
import { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode: 'button';
};

type LinkProps = ComponentProps<typeof Link> & {
  mode: 'link';
  className?: string;
  children?: ReactNode;
  to: string;
};

export type Props = ButtonProps | LinkProps;

// *MEMO: Button으로 공용화하되, mode로 타입을 분리해서 쓰도록 정의.
// *MEMO: Link에서 추가로 분리할 부분은 하단에 분리하도록 하고, 차후에 좀 더 리팩토링하여 간결화할 수 있다면 하도록 하자.
export default function Button({ mode, className, children, ...rest }: Props) {
  const buttonStyle = 'flex p rounded-lg justify-center items-center w-full ' + className;

  if (mode === 'button') {
    const props = rest as ButtonProps;

    return (
      <button className={buttonStyle} {...props}>
        {children}
      </button>
    );
  } else if (mode === 'link') {
    const props = rest as LinkProps;

    return (
      <Link className={buttonStyle} {...props}>
        {children}
      </Link>
    );
  }
}
