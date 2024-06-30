import { supabase } from '~/lib/supabase';
import Bosses from '../data/bosses.json';
import { Boss } from '../domain/entities';

// export const getBosses = (): Promise<Boss[]> => {
//   const sortedBosses = [...Bosses].sort((a, b) => a.boss.localeCompare(b.boss));

//   return new Promise((resolve) => {
//     resolve(sortedBosses);
//   });
// };

export const getBosses = async (): Promise<any> => {
  try {
    const { data, error } = await supabase.from('bosses').select('*').order('boss');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
