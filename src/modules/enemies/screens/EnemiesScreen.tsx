import { ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getEnemies } from '../actions/getEnemies';
import { Button, FullScreenLoader, globalStyles } from '~/modules/core';

export const EnemiesScreen = () => {
  const { data: enemies } = useQuery({
    queryKey: ['enemies'],
    queryFn: getEnemies,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!enemies) return <FullScreenLoader/>;

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {enemies.map((enemy) => (
          <Link href={`(detail)/enemy/${enemy.id}`} asChild key={enemy.id}>
            <Button title={enemy.enemy} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
