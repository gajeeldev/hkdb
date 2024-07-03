import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getNpcById = async (id: string | string[]): Promise<Tables<'npcs'> | undefined> => {
  try {
    const { data, error } = await supabase.from('npcs').select('*').eq('id', id).single();
    if (error) console.log(error.message);

    if (!data) return undefined;

    const npc = data;

    return npc;
  } catch (error) {
    console.log(error);
  }
};
