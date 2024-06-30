import { supabase } from '~/lib/supabase';
import Charms from '../data/charms.json';
import { Charm } from '../domain/entities';

// export const getCharmById = (id: string | string[]): Promise<Charm | undefined> => {
//   const charm = Charms.find((charm) => charm.id === id);

//   return new Promise((resolve) => {
//     resolve(charm);
//   });
// };

export const getCharmById = async (id: string | string[]): Promise<any> => {
  try {
    const { data, error } = await supabase.from('charms').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    const charm = data;

    if (!charm) return [];

    return charm;
  } catch (error) {
    console.log(error);
  }
};
