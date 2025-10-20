import { ReactNode } from 'react';

type Props = {
  icon?: ReactNode;
  text?: string;
};

export default function FAB({ icon, text }: Props) {
  return (
    <button className="flex flex-col rounded-e-full w-6 h-6">
      {icon}
      {text}
    </button>
  );
}
