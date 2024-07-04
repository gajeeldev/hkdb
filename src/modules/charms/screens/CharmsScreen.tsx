import { FlatList, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Button, FullScreenLoader, globalStyles } from '~/modules/core';
import { getCharms } from '../actions/getCharms';
import { CharmCard } from '../components/CharmCard';

export const CharmsScreen = () => {
  const { data: charms } = useQuery({
    queryKey: ['charms'],
    queryFn: getCharms,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!charms) return <FullScreenLoader />;

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={charms}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <CharmCard
            href={`(detail)/charm/${item.id}`}
            title={item.charm}
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
