import { supabase } from '~/lib/supabase';
import { Tables } from '~/types';

export const getSpellAndAbilityById = async (
  id: string | string[]
): Promise<Tables<'spells_and_abilities'> | undefined> => {
  try {
    const { data, error } = await supabase
      .from('spells_and_abilities')
      .select('*')
      .eq('id', id)
      .single();

    if (error) console.log(error.message);

    if (!data) return undefined;

    const spellAndAbility = data;

    return spellAndAbility;
  } catch (error) {
    console.log(error);
  }
};
