import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getAreaById = async (id: string | string[]): Promise<Tables<'areas'> | undefined> => {
  try {
    const { data, error } = await supabase.from('areas').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    if (!data) return undefined;

    const area = data;

    return area;
  } catch (error) {
    console.log(error);
  }
};
