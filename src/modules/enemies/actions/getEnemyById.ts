import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getEnemyById = async (
  id: string | string[]
): Promise<Tables<'enemies'> | undefined> => {
  try {
    const { data, error } = await supabase.from('enemies').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    if (!data) return undefined;

    const enemy = data;

    return enemy;
  } catch (error) {
    console.log(error);
  }
};
