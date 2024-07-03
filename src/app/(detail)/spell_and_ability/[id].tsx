import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import SpellAndAbilityDetailScreen from '~/modules/spells_and_abilities/screens/SpellAndAbilityDetailScreen';

const SpellAndAbilityDetailPage = () => {
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

  return <SpellAndAbilityDetailScreen id={id} />;
};

export default SpellAndAbilityDetailPage;
