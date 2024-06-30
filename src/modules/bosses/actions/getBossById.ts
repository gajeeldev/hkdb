import { supabase } from '~/lib/supabase';
import Bosses from '../data/bosses.json';
import { Boss } from '../domain/entities';

// export const getBossById = (id: string | string[]): Promise<Boss | undefined> => {
//   const boss = Bosses.find((boss) => boss.id === id);

//   return new Promise((resolve) => {
//     resolve(boss);
//   });
// };

export const getBossById = async (id: string | string[]): Promise<any> => {
  try {
    const { data, error } = await supabase.from('bosses').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    const boss = data;

    if (!boss) return [];

    return boss;
  } catch (error) {
    console.log(error);
  }
};
