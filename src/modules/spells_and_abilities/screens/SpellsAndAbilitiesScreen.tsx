import { Link } from 'expo-router';
import { View, ScrollView } from 'react-native';
import { Button, globalStyles } from '~/modules/core';
import SpellsAndAbilities from '../../core/data/spells_and_abilities.json';

export const SpellsAndAbilitiesScreen = () => {
  const sortedSpellsAndAbilities = [...SpellsAndAbilities].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {sortedSpellsAndAbilities.map((spellAndAbility) => (
          <Link
            href={`(detail)/spell_and_ability/${spellAndAbility.id}`}
            asChild
            key={spellAndAbility.id}>
            <Button title={spellAndAbility.name} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
