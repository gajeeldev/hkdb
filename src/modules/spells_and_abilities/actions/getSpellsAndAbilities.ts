import SpellsAndAbilities from '../data/spells_and_abilities.json';
import { SpellAndAbility } from '../domain/entities';

export const getSpellsAndAbilities = (): Promise<SpellAndAbility[]> => {
  const sortedSpellsAndAbilities = [...SpellsAndAbilities].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return new Promise((resolve) => {
    resolve(sortedSpellsAndAbilities);
  });
};
