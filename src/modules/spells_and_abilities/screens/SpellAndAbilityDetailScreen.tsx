import { View, Text, ScrollView } from 'react-native';
import SpellsAndAbilities from '../../core/data/spells_and_abilities.json';
import { globalStyles, GoBack, Subtitle, Title } from '~/modules/core';
import { Stack } from 'expo-router';

const SpellAndAbilityDetailScreen = ({ id }: { id: string | string[] }) => {
  const spellAndAbility = SpellsAndAbilities.find((spellAndAbility) => spellAndAbility.id === id);

  if (!spellAndAbility) return null;
  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: spellAndAbility.name,
          headerLeft: () => <GoBack />,
        }}
      />
      <ScrollView>
        <Title text={spellAndAbility.name} />

        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {spellAndAbility.inventory_description_1}
        </Text>
        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {spellAndAbility.inventory_description_2}
        </Text>

        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {spellAndAbility.prompt_description_1}
        </Text>
        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {spellAndAbility.prompt_description_2}
        </Text>

        <Subtitle text="Type" />
        <Text style={{ color: 'white' }}>{spellAndAbility.type}</Text>

        <Subtitle text="Function" />
        <Text style={{ color: 'white' }}>{spellAndAbility.function}</Text>

        {spellAndAbility.modifiers && (
          <View>
            <Subtitle text="Modifiers" />
            {spellAndAbility.modifiers?.map((modifier) => (
              <Text style={{ color: 'white' }} key={modifier}>
                {modifier}
              </Text>
            ))}
          </View>
        )}

        <Subtitle text="How to acquire" />
        <Text style={{ color: 'white' }}>{spellAndAbility.how_to_acquire}</Text>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

export default SpellAndAbilityDetailScreen;
