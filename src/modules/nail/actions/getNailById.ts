import { supabase } from '~/lib/supabase';
import Nails from '../data/nail.json';
import { Nail } from '../domain/entities';

// export const getNailById = (id: string | string[]): Promise<Nail | undefined> => {
//   const nail = Nails.find((nail) => nail.id === id);

//   return new Promise((resolve) => {
//     resolve(nail);
//   });
// };

export const getNailById = async (id: string | string[]): Promise<any> => {
  try {
    const { data, error } = await supabase.from('nail').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    const nail = data;

    if (!nail) return [];

    return nail;
  } catch (error) {
    console.log(error);
  }
};
