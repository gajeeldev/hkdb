import { ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Button, FullScreenLoader, globalStyles } from '~/modules/core';
import { getBosses } from '../actions/getBosses';

export const BossesScreen = () => {
  const { data: bosses } = useQuery({
    queryKey: ['bosses'],
    queryFn: getBosses,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!bosses) return <FullScreenLoader/>;

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {bosses.map((boss) => (
          <Link href={`(detail)/boss/${boss.id}`} asChild key={boss.id}>
            <Button title={boss.boss} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
