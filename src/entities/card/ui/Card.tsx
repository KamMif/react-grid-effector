import type { FC } from 'react';
import type { CardProps } from '../../../features/cardCRUD/types.ts';

export const Card: FC<CardProps> = ({ x, h, w, y, title, content }) => {
  return (
    <div
      data-grid={{ x, y, w, h }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 w-full h-full"
    >
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 font-medium text-gray-800">
        {title}
      </div>
      <div className="p-4 text-gray-700">{content}</div>
    </div>
  );
};
