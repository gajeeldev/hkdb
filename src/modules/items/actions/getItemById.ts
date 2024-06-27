import Items from '../data/items.json';
import { Item } from '../domain/entities';

export const getItemById = (id: string | string[]): Promise<Item | undefined> => {
  const item = Items.find((item) => item.id === id);

  return new Promise((resolve) => {
    resolve(item);
  });
};
