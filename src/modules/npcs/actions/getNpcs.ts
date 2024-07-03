import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getNpcs = async (): Promise<Tables<'npcs'>[] | undefined> => {
  try {
    const { data, error } = await supabase.from('npcs').select('*').order('npc');
    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
