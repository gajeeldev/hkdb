import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getNails = async (): Promise<Tables<'nail'>[] | undefined> => {
  try {
    const { data, error } = await supabase.from('nail').select('*');
    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
