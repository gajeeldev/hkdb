import { Text } from 'react-native';
import { Subtitle } from '~/modules/core';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';
import Items from '../../core/data/items.json';

const ItemDetailScreen = ({ id }: { id: string | string[] }) => {
  const item = Items.find((item) => item.id === id);

  if (!item) return null;
  return (
    <LayoutDetailScreen
      images={item.images}
      title={item.item}
      firstDescription={item.description_1}
      secondDescription={item.description_2}>
      <Subtitle text="Effects" />
      <Text style={{ color: 'white' }}>{item.effects}</Text>
      <Subtitle text="Type" />
      <Text style={{ color: 'white' }}>{item.type}</Text>
      <Subtitle text="Use" />
      <Text style={{ color: 'white' }}>{item.use}</Text>
      <Subtitle text="How to acquire" />
      {item.how_to_acquire.map((howToAcquire, index) => (
        <Text style={{ color: 'white' }} key={index}>
          {howToAcquire}
        </Text>
      ))}
    </LayoutDetailScreen>
  );
};

export default ItemDetailScreen;
