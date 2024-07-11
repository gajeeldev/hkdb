import { Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { colors, FullScreenLoader, Subtitle } from '~/modules/core';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';
import { getItemById } from '../actions/getItemById';

const ItemDetailScreen = ({ id }: { id: string | string[] }) => {
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
      <Subtitle text="Effects" />
      <Text style={{ color: colors.textColor }}>{item.effects}</Text>
      <Subtitle text="Type" />
      <Text style={{ color: colors.textColor }}>{item.type}</Text>
      <Subtitle text="Use" />
      <Text style={{ color: colors.textColor }}>{item.use}</Text>
      <Subtitle text="How to acquire" />
      {item.how_to_acquire.map((howToAcquire, index) => (
        <Text style={{ color: colors.textColor }} key={index}>
          {howToAcquire}
        </Text>
      ))}
    </LayoutDetailScreen>
  );
};

export default ItemDetailScreen;
