import {
  $description,
  $modalOpen,
  $title,
  addCardTriggered,
  changeDescription,
  changeTitle,
  modalHandler,
} from '../model';
import type { CardProps } from '../model/types.ts';
import { type Layout } from 'react-grid-layout';
import type { ChangeEventHandler, FC } from 'react';
import { GRID_CONFIG } from '../../../shared/config';
import { Button, Modal, TextArea } from '../../../shared/ui';
import { Input } from '../../../shared/ui';
import { useUnit } from 'effector-react';

interface Props {
  layout: Layout[];
}

export const AddCard: FC<Props> = ({ layout }) => {
  const isModalOpen = useUnit($modalOpen);
  const title = useUnit($title);

  const description = useUnit($description);

  const handleModal = (isOpen: boolean) => modalHandler(isOpen);

  const handleInput =
    (type: 'title' | 'description'): ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
    ({ target: { value } }) => {
      return type === 'title' ? changeTitle(value) : changeDescription(value);
    };
  const handleAddCard = () => {
    const defaultCardWidth = 3;
    const defaultCardHeight = 2;
    const cols = GRID_CONFIG.cols; //

    let nextX = 0;
    let nextY = 0;

    if (layout.length > 0) {
      // Ищем самый краиний элемент
      const sortedLayout = [...layout].sort((a, b) => {
        if (a.y === b.y) {
          return a.x - b.x;
        }
        return a.y - b.y;
      });

      const lastItem = sortedLayout[sortedLayout.length - 1];

      if (lastItem.x + lastItem.w + defaultCardWidth <= cols) {
        nextX = lastItem.x + lastItem.w;
        nextY = lastItem.y;
      } else {
        const maxYInGrid = layout.reduce((max, item) => Math.max(max, item.y + item.h), 0);
        nextX = 0;
        nextY = maxYInGrid;
      }
    }

    const newCard: Omit<CardProps, 'id' | 'title' | 'content'> = {
      x: nextX,
      y: nextY,
      w: defaultCardWidth,
      h: defaultCardHeight,
    };
    addCardTriggered(newCard);
  };
  return (
    <>
      <Button onClick={() => handleModal(true)} title="Добавить карточку" />
      <Modal isOpen={isModalOpen} onClose={() => handleModal(false)}>
        <div>
          <Input value={title} onChange={handleInput('title')} label="Название" />
        </div>
        <div>
          <TextArea value={description} onChange={handleInput('description')} label="Описание" />
        </div>
        <Button onClick={() => handleAddCard()} title="Добавить карточку" />
      </Modal>
    </>
  );
};
