import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getEnemies } from '../actions/getEnemies';
import { FullScreenLoader, globalStyles } from '~/modules/core';
import { EnemyCard } from '../components/EnemyCard';
import { FlashList } from '@shopify/flash-list';
import { ColumnItem } from '../components/ColumnItem';

export const EnemiesScreen = () => {
  const { data: enemies } = useQuery({
    queryKey: ['enemies'],
    queryFn: getEnemies,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!enemies) return <FullScreenLoader />;

  return (
    <View style={globalStyles.container}>
      <FlashList
        data={enemies}
        keyExtractor={(item) => item.id}
        numColumns={2}
        estimatedItemSize={182.85}
        renderItem={({ item, index }) => (
          <ColumnItem index={index} numColumns={2}>
            <EnemyCard
              href={`(detail)/enemy/${item.id}`}
              title={item.enemy}
              image={item.images[0]}
              index={index}
            />
          </ColumnItem>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <View style={{ height: 20 }} />}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};
