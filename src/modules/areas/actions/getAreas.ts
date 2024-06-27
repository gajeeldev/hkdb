import Areas from '../data/areas.json';
import { Area } from '../domain/entities';

export const getAreas = (): Promise<Area[]> => {
  const sortedAreas = [...Areas].sort((a, b) => a.area.localeCompare(b.area));

  return new Promise((resolve) => {
    resolve(sortedAreas);
  });
};
