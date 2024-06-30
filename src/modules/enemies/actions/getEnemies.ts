import { supabase } from '~/lib/supabase';
import Enemies from '../data/enemies.json';
import { Enemy } from '../domain/entities';

// export const getEnemies = (): Promise<Enemy[]> => {
//   const sortedEnemies = [...Enemies].sort((a, b) => a.enemy.localeCompare(b.enemy));

//   return new Promise((resolve) => {
//     resolve(sortedEnemies);
//   });
// };

export const getEnemies = async (): Promise<any> => {
  try {
    const { data, error } = await supabase.from('enemies').select('*').order('enemy');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
