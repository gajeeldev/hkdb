import { supabase } from '~/lib/supabase';
import Areas from '../data/areas.json';
import { Area } from '../domain/entities';

// export const getAreaById = (id: string | string[]): Promise<Area | undefined> => {
//   const area = Areas.find((area) => area.id === id);

//   return new Promise((resolve) => {
//     resolve(area);
//   });
// };

export const getAreaById = async (id: string | string[]): Promise<any> => {
  try {
    const { data, error } = await supabase.from('areas').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    const area = data;

    if (!area) return [];

    return area;
  } catch (error) {
    console.log(error);
  }
};
