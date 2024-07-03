import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getAreas = async (): Promise<Tables<'areas'>[] | undefined> => {
  try {
    const { data, error } = await supabase.from('areas').select('*').order('area');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
