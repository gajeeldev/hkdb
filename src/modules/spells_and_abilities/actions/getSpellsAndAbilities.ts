import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getSpellsAndAbilities = async (): Promise<
  Tables<'spells_and_abilities'>[] | undefined
> => {
  try {
    const { data, error } = await supabase.from('spells_and_abilities').select('*').order('name');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
