import { FlatList, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getItemById } from '../actions/getItemById';
import { colors, FullScreenLoader, Subtitle } from '~/modules/core';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';
import { entries } from '../data/data';

export const HunterMarkScreen = ({ id }: { id: string | string[] }) => {
  const { data: item } = useQuery({
    queryKey: ['item', id],
    queryFn: () => getItemById(id),
    staleTime: 1000 * 60 * 60, //1 hour
  });

  if (!item) return <FullScreenLoader />;
  return (
    <LayoutDetailScreen
      images={item.images}
      title={item.item}
      firstDescription={item.description_1}
      secondDescription={item.description_2}>
      <Subtitle text="How to acquire" />
      {item.how_to_acquire.map((howToAcquire, index) => (
        <Text style={{ color: colors.textColor }} key={index}>
          {howToAcquire}
        </Text>
      ))}

      <Text style={{ color: colors.textColor, marginTop: 10 }}>
        The following entries are not required in order to acquire the Hunter's Mark:
      </Text>

      <FlatList
        style={{ marginTop: 10 }}
        data={entries}
        renderItem={({ item }) => <Text style={{ color: colors.textColor }}>{item}</Text>}
        keyExtractor={(item) => item}
        scrollEnabled={false}
      />
    </LayoutDetailScreen>
  );
};
