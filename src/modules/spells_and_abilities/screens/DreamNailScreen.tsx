import { useQuery } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { View, Text, useWindowDimensions, ScrollView, Platform, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { blurhash, FullScreenLoader, globalStyles, GoBack, Subtitle } from '~/modules/core';
import { getSpellAndAbilityById } from '../actions/getSpellAndAbilityById';
import { Image } from 'expo-image';
import DialogueDescription from '~/modules/core/components/dividers/DialogueDescription';

const WarriorDream = [
  'Elder Hu (100)',
  'Galien (200)',
  'Gorb (100)',
  'Markoth (250)',
  'Marmu (150)',
  'No Eyes (200)',
  'Xero (100)',
];

const DreamBoss = [
  'Failed Champion (300)',
  'Grey Prince Zote (300)',
  'Lost Kin (400)',
  'White Defender (300)',
  'Soul Tyrant (300)',
];

const RegularEnemies = [
  'If less Essence was spent on warping to a Dreamgate than getting randomly from Enemies: 0.33% (1/300)',
  'If more Essence was spent on warping to a Dreamgate than getting randomly from Enemies: 1.67% (1/60)',
  'If Dream Wielder is equipped and less Essence was spent on warping to a Dreamgate than getting randomly from Enemies: 0.5% (1/200)',
  'If Dream Wielder is equipped and more Essence was spent on warping to a Dreamgate than getting randomly from Enemies: 2.5% (1/40)',
];

const EssenceRewards = [
  '100 Essence - Hallownest Seal',
  "200 Essence - Spirits' Glade opens",
  '300 Essence - Pale Ore',
  '500 Essence - Dream Wielder Charm',
  '700 Essence - Vessel Fragment',
  '900 Essence - Hidden Dreams content Dreamgate',
  '1200 Essence - Arcane Egg',
  '1500 Essence - Mask Shard',
  '1800 Essence - Awaken the Dream Nail and unlock the Awakening Achievement',
  '2400 Essence - The Ascension Achievement',
];

export const DreamNailScreen = ({ id }: { id: string | string[] }) => {
  const { top } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const { data: spellAndAbility } = useQuery({
    queryKey: ['spellAndAbility', id],
    queryFn: () => getSpellAndAbilityById(id),
    staleTime: 1000 * 60 * 60, //1 hour
  });

  if (!spellAndAbility) return <FullScreenLoader />;

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
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
          <Image
            source={{ uri: spellAndAbility.images[0] }}
            contentFit="contain"
            style={{ width: width, height: height * 0.25, marginHorizontal: 7 }}
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
            style={{ width: width, height: height * 0.25, marginHorizontal: 7 }}
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

        <Subtitle text="How to acquire" />
        <Text style={{ color: 'white' }}>{spellAndAbility.how_to_acquire}</Text>

        <Subtitle text="Awoken Dream Nail" />
        <Text style={{ color: 'white' }}>
          After collecting 1800 Essence, the Dream Nail can be awoken. This allows access to dreams
          and memories that were previously hidden. The Awoken Dream Nail can be used on the corpse
          of the Kingsmould in the Palace Grounds, which grants entry to the White Palace. It can
          now also be used to view the Dream Nail dialogue of the Shade Cloak creature in the Abyss.
          This creature has different Dream Nail dialogue depending on whether or not Void Heart has
          been obtained.
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Image
            source={{ uri: spellAndAbility.images[2] }}
            contentFit="contain"
            style={{ width: width, height: height * 0.25, marginHorizontal: 7 }}
            placeholder={blurhash}
            transition={1000}
          />
        </View>

        <DialogueDescription
          firstDescription="Allows the wielder to cut through the veil between dreams and waking. Can be used to reveal hidden dreams or open gateways."
          secondDescription="The power of the Dream Nail has fully awoken, allowing entry into certain protected memories."
        />

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Image
            source={{ uri: spellAndAbility.images[3] }}
            contentFit="contain"
            style={{ width: width, height: height * 0.25, marginHorizontal: 7 }}
            placeholder={blurhash}
            transition={1000}
          />
        </View>

        <DialogueDescription
          firstDescription="Hold DREAM NAIL to charge and slash with the nail."
          secondDescription="The Dream Nail is upgraded. It can break into even the most protected mind."
        />
        <Subtitle text="Essence" />
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../../assets/images/Essence.webp')}
            contentFit="cover"
            style={{ width: 50, height: 50 }}
            placeholder={blurhash}
            transition={1000}
          />

          <View style={{ width: width * 0.8 }}>
            <Text style={{ color: 'white' }}>
              Essence is the energy gained from multiple sources after obtaining the Dream Nail.
              After obtaining certain amounts of Essence, the Knight can return to the Seer for
              rewards. A total of 2400 is needed for all in-game rewards and achievements, though up
              to 3208 essence is obtainable from one-time sources.
            </Text>
            <Text style={{ color: 'white', marginTop: 10 }}>
              Warping using the Dreamgate uses 1 Essence per warp.
            </Text>
          </View>
        </View>

        <Subtitle text="Essence Sources" />
        <Text style={{ color: 'white' }}>Using Dream Nail on a Spirit (26 total)</Text>
        <Text style={{ color: 'white' }}>
          Collecting Essence spawned by a Whispering Root (482 total)
        </Text>
        <Text style={{ color: 'white', marginTop: 10 }}>
          Defeating a Warrior Dream (1100 total)
        </Text>
        <FlatList
          style={{ marginTop: 10, marginLeft: 10 }}
          data={WarriorDream}
          renderItem={({ item }) => <Text style={{ color: 'white' }}>• {item}</Text>}
          keyExtractor={(item) => item}
          scrollEnabled={false}
        />
        <Text style={{ color: 'white', marginTop: 10 }}>Defeating a Dream Boss (1600 total)</Text>
        <FlatList
          style={{ marginTop: 10, marginLeft: 10 }}
          data={DreamBoss}
          renderItem={({ item }) => <Text style={{ color: 'white' }}>• {item}</Text>}
          keyExtractor={(item) => item}
          scrollEnabled={false}
        />
        <Text style={{ color: 'white', marginTop: 10 }}>
          Regular enemies have a chance to drop Essence:
        </Text>
        <FlatList
          style={{ marginTop: 10, marginLeft: 10 }}
          data={RegularEnemies}
          renderItem={({ item }) => <Text style={{ color: 'white' }}>• {item}</Text>}
          keyExtractor={(item) => item}
          scrollEnabled={false}
        />
        <Subtitle text="Essence rewards from the Seer" />
        <FlatList
          style={{ marginTop: 10, marginLeft: 10 }}
          data={EssenceRewards}
          renderItem={({ item }) => <Text style={{ color: 'white' }}>• {item}</Text>}
          keyExtractor={(item) => item}
          scrollEnabled={false}
        />
        <Subtitle text="Lore" />
        <Text style={{ color: 'white' }}>
          The Dream Nail is a sacred weapon and talisman, which can cut the veil that separates the
          waking world from dreams. It appears to have been made by the Moth Tribe. The Dream Nail
          allows its user to not only read the thoughts of an entity, or even inanimate objects, but
          also enter specific sections of the Dream Realm.
        </Text>
        <Text style={{ color: 'white', marginTop: 10 }}>
          Before the Knight acquires it, the Dream Nail has been dulled over time, requiring a
          significant amount of Essence to awaken it.
        </Text>
        <Text style={{ color: 'white', marginTop: 10 }}>
          Essence is the fragments of light that form dreams, which can take the shape of those who
          have passed away. Dreams and memories cling onto the Dream Nail once the Essence is
          collected.
        </Text>
        <Text style={{ color: 'white', marginTop: 10 }}>
          When sufficiently charged with Essence, the Dream Nail also allows the wielder to teleport
          from one place to another through the Dream Realm. The user warps by imagining a great
          gate to a location connected to them, provided the location has a strong connection to
          dreams.
        </Text>
        <Text style={{ color: 'white', marginTop: 10 }}>
          The user of the Dream Nail is referred to as the "Wielder", an entity whose arrival the
          Moth Tribe had awaited. The Wielder's purpose is to collect Essence and hunt memories all
          across Hallownest. Once 2400 or more Essence has been acquired, the Seer declares the
          Knight to be the Wielder her tribe had long dreamed of.
        </Text>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
