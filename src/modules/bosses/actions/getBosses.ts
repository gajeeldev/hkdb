import Bosses from '../data/bosses.json';
import { Boss } from '../domain/entities';

export const getBosses = (): Promise<Boss[]> => {
  const sortedBosses = [...Bosses].sort((a, b) => a.boss.localeCompare(b.boss));

  return new Promise((resolve) => {
    resolve(sortedBosses);
  });
};
