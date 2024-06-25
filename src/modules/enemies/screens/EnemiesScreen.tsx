import { ScrollView, View } from 'react-native';
import { Button, globalStyles } from '~/modules/core';
import Enemies from '../../core/data/enemies.json';
import { Link } from 'expo-router';

export const EnemiesScreen = () => {

  const sortedEnemies = [...Enemies].sort((a, b) => a.enemy.localeCompare(b.enemy));

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {sortedEnemies.map((enemy) => (
          <Link href={`(detail)/enemy/${enemy.id}`} asChild key={enemy.id}>
            <Button title={enemy.enemy} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
