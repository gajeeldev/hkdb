import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getCharmById = async (
  id: string | string[]
): Promise<Tables<'charms'> | undefined> => {
  try {
    const { data, error } = await supabase.from('charms').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    if (!data) return undefined;

    const charm = data;

    return charm;
  } catch (error) {
    console.log(error);
  }
};
