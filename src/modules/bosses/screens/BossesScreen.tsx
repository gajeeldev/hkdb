import { FlatList, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { FullScreenLoader, globalStyles } from '~/modules/core';
import { getBosses } from '../actions/getBosses';
import { BossCard } from '../components/BossCard';

export const BossesScreen = () => {
  const { data: bosses } = useQuery({
    queryKey: ['bosses'],
    queryFn: getBosses,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!bosses) return <FullScreenLoader />;

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={bosses}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <BossCard
            key={item.id}
            href={`(detail)/boss/${item.id}`}
            title={item.boss}
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
