import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getNailById = async (id: string | string[]): Promise<Tables<'nail'> | undefined> => {
  try {
    const { data, error } = await supabase.from('nail').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    if (!data) return undefined;

    const nail = data;

    return nail;
  } catch (error) {
    console.log(error);
  }
};
