import { createEvent, createStore, sample } from 'effector';
import type { CardProps } from './types.ts';
import { nanoid } from 'nanoid';

export const $cards = createStore<CardProps[]>([]);
export const $modalOpen = createStore(false);
export const $title = createStore<string>('');
export const $description = createStore<string>('');

export const addCardTriggered = createEvent<{ x: number; y: number; w: number; h: number }>();
const addCard = createEvent<CardProps>();
export const deleteCard = createEvent<CardProps['id']>();

export const modalHandler = createEvent<boolean>();

export const changeTitle = createEvent<string>();
export const changeDescription = createEvent<string>();
export const resetTitle = createEvent();
export const resetDescription = createEvent();

$cards
  .on(deleteCard, (state, id) => {
    return state.filter((card) => id !== card.id);
  })
  .on(addCard, (cards, card) => [...cards, card]);

sample({
  clock: $cards,
  fn: () => false,
  target: modalHandler,
});

$modalOpen.on(modalHandler, (_, isOpen) => isOpen);
$title.on(changeTitle, (_, title) => title).reset(resetTitle);
$description.on(changeDescription, (_, description) => description).reset(resetDescription);

sample({
  clock: addCardTriggered,
  source: {
    title: $title,
    description: $description,
  },
  fn: (sourceData, clockData) => {
    const newCard: CardProps = {
      id: nanoid(),
      title: sourceData.title,
      content: sourceData.description,
      x: clockData.x,
      y: clockData.y,
      w: clockData.w,
      h: clockData.h,
    };
    return newCard;
  },
  target: [addCard, resetTitle, resetDescription],
});
