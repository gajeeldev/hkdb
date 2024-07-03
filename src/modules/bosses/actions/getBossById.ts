import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getBossById = async (id: string | string[]): Promise<Tables<'bosses'> | undefined> => {
  try {
    const { data, error } = await supabase.from('bosses').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    if (!data) return undefined;
    const boss = data;

    return boss;
  } catch (error) {
    console.log(error);
  }
};
