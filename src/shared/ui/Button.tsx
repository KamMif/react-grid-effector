import type { FC, MouseEventHandler } from 'react';

interface Props {
  title: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ onClick, title }) => {
  const handleClick: MouseEventHandler = (e) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <button onClick={handleClick} className="p-2 m-2 bg-blue-500 text-white rounded">
      {title}
    </button>
  );
};
