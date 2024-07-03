import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getEnemies = async (): Promise<Tables<'enemies'>[] | undefined> => {
  try {
    const { data, error } = await supabase.from('enemies').select('*').order('enemy');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
