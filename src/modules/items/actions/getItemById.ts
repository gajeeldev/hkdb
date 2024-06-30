import { supabase } from '~/lib/supabase';
import Items from '../data/items.json';
import { Item } from '../domain/entities';

// export const getItemById = (id: string | string[]): Promise<Item | undefined> => {
//   const item = Items.find((item) => item.id === id);

//   return new Promise((resolve) => {
//     resolve(item);
//   });
// };

export const getItemById = async (id: string | string[]): Promise<any> => {
  try {
    const { data, error } = await supabase.from('items').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    const item = data;

    if (!item) return [];

    return item;
  } catch (error) {
    console.log(error);
  }
};
