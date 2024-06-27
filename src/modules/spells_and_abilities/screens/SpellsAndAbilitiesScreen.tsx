import { View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Button, FullScreenLoader, globalStyles } from '~/modules/core';
import { getSpellsAndAbilities } from '../actions/getSpellsAndAbilities';

export const SpellsAndAbilitiesScreen = () => {
  const { data: spellsAndAbilities } = useQuery({
    queryKey: ['spellsAndAbilities'],
    queryFn: getSpellsAndAbilities,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!spellsAndAbilities) return <FullScreenLoader />;

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {spellsAndAbilities.map((spellAndAbility) => (
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
