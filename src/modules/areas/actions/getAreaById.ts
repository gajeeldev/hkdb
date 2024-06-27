import Areas from '../data/areas.json';
import { Area } from '../domain/entities';

export const getAreaById = (id: string | string[]): Promise<Area | undefined> => {
  const area = Areas.find((area) => area.id === id);

  return new Promise((resolve) => {
    resolve(area);
  });
};
