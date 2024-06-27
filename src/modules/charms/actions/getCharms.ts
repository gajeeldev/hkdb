import Charms from '../data/charms.json';
import { Charm } from '../domain/entities';

export const getCharms = (): Promise<Charm[]> => {
  const sortedCharms = [...Charms].sort((a, b) => a.charm.localeCompare(b.charm));

  return new Promise((resolve) => {
    resolve(sortedCharms);
  });
};
