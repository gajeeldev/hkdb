import { View, Text, ScrollView, Platform } from 'react-native';
import SpellsAndAbilities from '../../core/data/spells_and_abilities.json';
import { blurhash, globalStyles, GoBack, Subtitle, Title } from '~/modules/core';
import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import DialogueDescription from '~/modules/core/components/dividers/DialogueDescription';

const SpellAndAbilityDetailScreen = ({ id }: { id: string | string[] }) => {
  const { top } = useSafeAreaInsets();
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: Platform.OS === 'ios' ? top + 100 : 0 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Image
            source={{ uri: spellAndAbility.images[0] }}
            contentFit="contain"
            style={{ width: 400, height: 200, marginHorizontal: 7 }}
            placeholder={blurhash}
            transition={1000}
          />
        </View>

        <DialogueDescription
          firstDescription={spellAndAbility.inventory_description_1}
          secondDescription={spellAndAbility.inventory_description_2}
        />

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Image
            source={{ uri: spellAndAbility.images[1] }}
            contentFit="contain"
            style={{ width: 400, height: 200, marginHorizontal: 7 }}
            placeholder={blurhash}
            transition={1000}
          />
        </View>

        <DialogueDescription
          firstDescription={spellAndAbility.prompt_description_1}
          secondDescription={spellAndAbility.prompt_description_2}
        />

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
