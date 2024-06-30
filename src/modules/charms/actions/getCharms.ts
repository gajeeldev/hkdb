import { supabase } from '~/lib/supabase';
import Charms from '../data/charms.json';
import { Charm } from '../domain/entities';

// export const getCharms = (): Promise<Charm[]> => {
//   const sortedCharms = [...Charms].sort((a, b) => a.charm.localeCompare(b.charm));

//   return new Promise((resolve) => {
//     resolve(sortedCharms);
//   });
// };

export const getCharms = async (): Promise<any> => {
  try {
    const { data, error } = await supabase.from('charms').select('*').order('charm');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
