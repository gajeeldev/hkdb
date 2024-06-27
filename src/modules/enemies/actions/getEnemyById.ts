import Enemies from '../data/enemies.json';
import { Enemy } from '../domain/entities';

export const getEnemyById = (id: string | string[]): Promise<Enemy | undefined> => {
  const enemy = Enemies.find((enemy) => enemy.id === id);

  return new Promise((resolve) => {
    resolve(enemy);
  });
};
