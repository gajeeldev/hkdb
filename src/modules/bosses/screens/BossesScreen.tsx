import { ScrollView, View } from 'react-native';
import { Button, globalStyles } from '~/modules/core';
import Bosses from '../../core/data/bosses.json';
import { Link } from 'expo-router';

export const BossesScreen = () => {
  Bosses.sort((a, b) => a.boss.localeCompare(b.boss));
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {Bosses.map((boss) => (
          <Link href={`/bosses/${boss.id}`} asChild key={boss.id}>
            <Button title={boss.boss} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
