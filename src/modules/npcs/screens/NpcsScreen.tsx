import { FlatList, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { FullScreenLoader, globalStyles } from '~/modules/core';
import { getNpcs } from '../actions/getNpcs';
import { NpcCard } from '../components/NpcCard';
export const NpcsScreen = () => {
  const { data: npcs } = useQuery({
    queryKey: ['npcs'],
    queryFn: getNpcs,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!npcs) return <FullScreenLoader />;
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={npcs}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item, index }) => (
          <NpcCard
            href={`(detail)/npc/${item.id}`}
            title={item.npc}
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
