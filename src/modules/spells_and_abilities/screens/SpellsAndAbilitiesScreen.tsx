import { View, ScrollView, FlatList, Text, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { FullScreenLoader, globalStyles } from '~/modules/core';
import { getSpellsAndAbilities } from '../actions/getSpellsAndAbilities';
import { SpellAndAbilityCard } from '../components/SpellAndAbilityCard';

export const SpellsAndAbilitiesScreen = () => {
  const { data: spellsAndAbilities } = useQuery({
    queryKey: ['spellsAndAbilities'],
    queryFn: getSpellsAndAbilities,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!spellsAndAbilities) return <FullScreenLoader />;

  const spells = spellsAndAbilities.filter((item) => item.type === 'Spell');
  const abilities = spellsAndAbilities.filter((item) => item.type === 'Ability');
  const nail_arts = spellsAndAbilities.filter((item) => item.type === 'Nail Art');

  return (
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 20 }}>
        {/* Spells */}
        <FlatList
          scrollEnabled={false}
          data={spells}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item, index }) => (
            <SpellAndAbilityCard
              href={`(detail)/spell_and_ability/${item.id}`}
              title={item.name}
              image={item.images[0]}
              index={index}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.title}>Spells</Text>
            </View>
          )}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
        />

        {/* Abilities */}
        <FlatList
          scrollEnabled={false}
          data={abilities}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item, index }) => (
            <SpellAndAbilityCard
              href={`(detail)/spell_and_ability/${item.id}`}
              title={item.name}
              image={item.images[0]}
              index={index}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.title}>Abilities</Text>
            </View>
          )}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
        />

        {/* Nail Arts */}
        <FlatList
          scrollEnabled={false}
          data={nail_arts}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item, index }) => (
            <SpellAndAbilityCard
              href={`(detail)/spell_and_ability/${item.id}`}
              title={item.name}
              image={item.images[0]}
              index={index}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.title}>Nail Arts</Text>
            </View>
          )}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#f5f5f5',
    fontSize: 25,
    fontFamily: 'TrajanPro-Bold',
  },
});
