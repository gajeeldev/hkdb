import { ScrollView, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { FullScreenLoader, globalStyles } from '~/modules/core';
import { getNails } from '../actions/getNails';
import { NailCard } from '../components/NailCard';

export const NailScreen = () => {
  const { data: nails } = useQuery({
    queryKey: ['nails'],
    queryFn: getNails,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!nails) return <FullScreenLoader />;
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }} showsVerticalScrollIndicator={false}>
        {nails.map((nail, index) => (
          <NailCard
            key={nail.id}
            description={nail.description}
            nail={nail.nail}
            images={nail.images}
            index={index}
            damage={nail.damage}
            upgrade_cost={nail.upgrade_cost}
          />
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
