import { supabase } from '~/lib/supabase';
import Nails from '../data/nail.json';
import { Nail } from '../domain/entities';

// export const getNails = (): Promise<Nail[]> => {
//   return new Promise((resolve) => {
//     resolve(Nails);
//   });
// };

export const getNails = async (): Promise<any> => {
  try {
    const { data, error } = await supabase.from('nail').select('*');
    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
