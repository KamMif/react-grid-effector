import type { FC, MouseEventHandler } from 'react';
import type { CardProps } from '../../../features/cardCRUD/model/types.ts';
import { deleteCard } from '../../../features/cardCRUD/model';

export const Card: FC<CardProps> = ({ x, h, w, y, title, content, id }) => {
  const handleDelete =
    (id: string): MouseEventHandler =>
    (e) => {
      e.stopPropagation();
      deleteCard(id);
    };
  return (
    <div
      data-grid={{ x, y, w, h }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 w-full h-full relative"
    >
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 font-medium text-gray-800 flex  justify-between">
        {title}
        <div
          className="absolute top-1 right-1 z-20 flex items-center justify-center
                     w-5 h-5 bg-red-500 text-white rounded-full cursor-pointer
                     hover:bg-red-700 transition-colors duration-200"
          onMouseDown={handleDelete(id)}
          title="Удалить карточку"
        >
          X
        </div>
      </div>
      <div className="p-4 text-gray-700">{content}</div>
    </div>
  );
};
