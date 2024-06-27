import Npcs from '../data/npcs.json';
import { Npc } from '../domain/entities';

export const getNpcById = (id: string | string[]): Promise<Npc | undefined> => {
  const npc = Npcs.find((npc) => npc.id === id);

  return new Promise((resolve) => {
    resolve(npc);
  });
};
