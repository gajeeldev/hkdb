import Nails from '../data/nail.json';
import { Nail } from '../domain/entities';

export const getNails = (): Promise<Nail[]> => {
  return new Promise((resolve) => {
    resolve(Nails);
  });
};
