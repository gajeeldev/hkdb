import Bosses from '../data/bosses.json';
import { Boss } from '../domain/entities';

export const getBossById = (id: string | string[]): Promise<Boss | undefined> => {
  const boss = Bosses.find((boss) => boss.id === id);

  return new Promise((resolve) => {
    resolve(boss);
  });
};
