import { FlatList, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { FullScreenLoader, globalStyles } from '~/modules/core';
import { getItems } from '../actions/getItems';
import { ItemCard } from '../components/ItemCard';

export const ItemsScreen = () => {
  const { data: items } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!items) return <FullScreenLoader />;

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <ItemCard
            href={`(detail)/item/${item.id}`}
            title={item.item}
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
