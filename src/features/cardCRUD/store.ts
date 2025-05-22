import { createEvent, createStore } from 'effector';
import type { CardProps } from './types.ts';

export const $cards = createStore<CardProps[]>([]);

export const addCard = createEvent<CardProps>();

$cards.on(addCard, (store, card) => {
  return { ...store, card };
});
