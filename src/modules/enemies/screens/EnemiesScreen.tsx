import { FlatList, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getEnemies } from '../actions/getEnemies';
import { FullScreenLoader, globalStyles } from '~/modules/core';
import { EnemyCard } from '../components/EnemyCard';

export const EnemiesScreen = () => {
  const { data: enemies } = useQuery({
    queryKey: ['enemies'],
    queryFn: getEnemies,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!enemies) return <FullScreenLoader />;

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={enemies}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <EnemyCard
            href={`(detail)/enemy/${item.id}`}
            title={item.enemy}
            image={item.images[0]}
            index={index}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <View style={{ height: 20 }} />}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};
