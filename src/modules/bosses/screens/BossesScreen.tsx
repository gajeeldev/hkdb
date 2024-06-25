import { ScrollView, View } from 'react-native';
import { Button, globalStyles } from '~/modules/core';
import Bosses from '../../core/data/bosses.json';
import { Link } from 'expo-router';

export const BossesScreen = () => {
  const sortedBosses = [...Bosses].sort((a, b) => a.boss.localeCompare(b.boss));

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {sortedBosses.map((boss) => (
          <Link href={`(detail)/boss/${boss.id}`} asChild key={boss.id}>
            <Button title={boss.boss} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
