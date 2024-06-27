import Npcs from '../data/npcs.json';
import { Npc } from '../domain/entities';

export const getNpcs = (): Promise<Npc[]> => {
  const sortedNpcs = [...Npcs].sort((a, b) => a.npc.localeCompare(b.npc));

  return new Promise((resolve) => {
    resolve(sortedNpcs);
  });
};
