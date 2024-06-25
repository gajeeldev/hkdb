import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import ItemDetailScreen from '~/modules/items/screens/ItemDetailScreen';

const ItemDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }
  return <ItemDetailScreen id={id} />;
};

export default ItemDetailPage;
