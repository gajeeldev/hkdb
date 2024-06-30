import { supabase } from '~/lib/supabase';
import Items from '../data/items.json';
import { Item } from '../domain/entities';

// export const getItems = (): Promise<Item[]> => {
//   const sortedItems = [...Items].sort((a, b) => a.item.localeCompare(b.item));

//   return new Promise((resolve) => {
//     resolve(sortedItems);
//   });
// };

export const getItems = async (): Promise<any> => {
  try {
    const { data, error } = await supabase.from('items').select('*').order('item');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
