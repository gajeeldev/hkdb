import { supabase } from '~/lib/supabase';
import Areas from '../data/areas.json';
import { Area } from '../domain/entities';

// export const getAreas = (): Promise<Area[]> => {
//   const sortedAreas = [...Areas].sort((a, b) => a.area.localeCompare(b.area));

//   return new Promise((resolve) => {
//     resolve(sortedAreas);
//   });
// };

export const getAreas = async (): Promise<any> => {
  try {
    const { data, error } = await supabase.from('areas').select('*').order('area');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
