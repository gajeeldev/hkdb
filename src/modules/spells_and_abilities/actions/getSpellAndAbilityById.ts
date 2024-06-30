import { supabase } from '~/lib/supabase';
import SpellsAndAbilities from '../data/spells_and_abilities.json';
import { SpellAndAbility } from '../domain/entities';

// export const getSpellAndAbilityById = (
//   id: string | string[]
// ): Promise<SpellAndAbility | undefined> => {
//   const spellAndAbility = SpellsAndAbilities.find((spellAndAbility) => spellAndAbility.id === id);

//   return new Promise((resolve) => {
//     resolve(spellAndAbility);
//   });
// };

export const getSpellAndAbilityById = async (id: string | string[]): Promise<any> => {
  try {
    const { data, error } = await supabase
      .from('spells_and_abilities')
      .select('*')
      .eq('id', id)
      .single();

    if (error) console.log(error.message);

    const spellAndAbility = data;

    if (!spellAndAbility) return [];

    return spellAndAbility;
  } catch (error) {
    console.log(error);
  }
};
