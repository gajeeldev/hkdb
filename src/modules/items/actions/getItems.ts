import Items from '../data/items.json';
import { Item } from '../domain/entities';

export const getItems = (): Promise<Item[]> => {
  const sortedItems = [...Items].sort((a, b) => a.item.localeCompare(b.item));

  return new Promise((resolve) => {
    resolve(sortedItems);
  });
};
