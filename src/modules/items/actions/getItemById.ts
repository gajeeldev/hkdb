import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getItemById = async (id: string | string[]): Promise<Tables<'items'> | undefined> => {
  try {
    const { data, error } = await supabase.from('items').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    if (!data) return undefined;

    const item = data;

    return item;
  } catch (error) {
    console.log(error);
  }
};
