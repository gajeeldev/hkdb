import Enemies from '../data/enemies.json';
import { Enemy } from '../domain/entities';

export const getEnemies = (): Promise<Enemy[]> => {
  const sortedEnemies = [...Enemies].sort((a, b) => a.enemy.localeCompare(b.enemy));

  return new Promise((resolve) => {
    resolve(sortedEnemies);
  });
};
