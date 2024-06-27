import Nails from '../data/nail.json';
import { Nail } from '../domain/entities';

export const getNailById = (id: string | string[]): Promise<Nail | undefined> => {
  const nail = Nails.find((nail) => nail.id === id);

  return new Promise((resolve) => {
    resolve(nail);
  });
};
