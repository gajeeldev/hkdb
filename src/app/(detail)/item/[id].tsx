import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import ItemDetailScreen from '~/modules/items/screens/ItemDetailScreen';

const ItemDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }

  // if (id === 'b0e4244e-0dd1-437e-b76d-c524a443468c') {
  //   return (
  //     <View>
  //       <Text>fragileGreed</Text>
  //     </View>
  //   );
  // }

  return <ItemDetailScreen id={id} />;
};

export default ItemDetailPage;
