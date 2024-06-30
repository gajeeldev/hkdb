import { supabase } from '~/lib/supabase';
import Enemies from '../data/enemies.json';
import { Enemy } from '../domain/entities';

// export const getEnemyById = (id: string | string[]): Promise<Enemy | undefined> => {
//   const enemy = Enemies.find((enemy) => enemy.id === id);

//   return new Promise((resolve) => {
//     resolve(enemy);
//   });
// };

export const getEnemyById = async (id: string | string[]): Promise<any> => {
  try {
    const { data, error } = await supabase.from('enemies').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    const enemy = data;

    if (!enemy) return [];

    return enemy;
  } catch (error) {
    console.log(error);
  }
};
