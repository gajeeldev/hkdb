import Charms from '../data/charms.json';
import { Charm } from '../domain/entities';

export const getCharmById = (id: string | string[]): Promise<Charm | undefined> => {
  const charm = Charms.find((charm) => charm.id === id);

  return new Promise((resolve) => {
    resolve(charm);
  });
};
