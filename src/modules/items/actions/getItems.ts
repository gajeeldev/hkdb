import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getItems = async (): Promise<Tables<'items'>[] | undefined> => {
  try {
    const { data, error } = await supabase.from('items').select('*').order('item');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
