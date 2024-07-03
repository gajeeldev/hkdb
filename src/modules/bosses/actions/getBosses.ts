import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getBosses = async (): Promise<Tables<'bosses'>[] | undefined> => {
  try {
    const { data, error } = await supabase.from('bosses').select('*').order('boss');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
