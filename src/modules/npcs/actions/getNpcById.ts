import { supabase } from '~/lib/supabase';
import Npcs from '../data/npcs.json';
import { Npc } from '../domain/entities';

// export const getNpcById = (id: string | string[]): Promise<Npc | undefined> => {
//   const npc = Npcs.find((npc) => npc.id === id);

//   return new Promise((resolve) => {
//     resolve(npc);
//   });
// };

export const getNpcById = async (id: string | string[]): Promise<any> => {
  try {
    const { data, error } = await supabase.from('npcs').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    const npc = data;

    if (!npc) return [];

    return npc;
  } catch (error) {
    console.log(error);
  }
};
