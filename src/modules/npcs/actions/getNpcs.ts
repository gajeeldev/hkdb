import { supabase } from '~/lib/supabase';
import Npcs from '../data/npcs.json';
import { Npc } from '../domain/entities';

// export const getNpcs = (): Promise<Npc[]> => {
//   const sortedNpcs = [...Npcs].sort((a, b) => a.npc.localeCompare(b.npc));

//   return new Promise((resolve) => {
//     resolve(sortedNpcs);
//   });
// };

export const getNpcs = async (): Promise<any> => {
  try {
    const { data, error } = await supabase.from('npcs').select('*').order('npc');
    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
