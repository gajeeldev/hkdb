import SpellsAndAbilities from '../data/spells_and_abilities.json';
import { SpellAndAbility } from '../domain/entities';

export const getSpellAndAbilityById = (
  id: string | string[]
): Promise<SpellAndAbility | undefined> => {
  const spellAndAbility = SpellsAndAbilities.find((spellAndAbility) => spellAndAbility.id === id);

  return new Promise((resolve) => {
    resolve(spellAndAbility);
  });
};
