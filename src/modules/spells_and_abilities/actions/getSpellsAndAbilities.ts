import { supabase } from '~/lib/supabase';
import SpellsAndAbilities from '../data/spells_and_abilities.json';
import { SpellAndAbility } from '../domain/entities';

// export const getSpellsAndAbilities = (): Promise<SpellAndAbility[]> => {
//   const sortedSpellsAndAbilities = [...SpellsAndAbilities].sort((a, b) =>
//     a.name.localeCompare(b.name)
//   );

//   return new Promise((resolve) => {
//     resolve(sortedSpellsAndAbilities);
//   });
// };

export const getSpellsAndAbilities = async (): Promise<any> => {
  try {
    const { data, error } = await supabase.from('spells_and_abilities').select('*').order('name');

    if (error) console.log(error.message);

    if (!data) return [];

    return data;
  } catch (error) {
    console.log(error);
  }
};
