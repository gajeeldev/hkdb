import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getCharms = async (): Promise<Tables<'charms'>[] | undefined> => {
  try {
    const { data, error } = await supabase.from('charms').select('*').order('charm');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
