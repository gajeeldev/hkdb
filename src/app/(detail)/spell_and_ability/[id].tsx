import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import SpellAndAbilityDetailScreen from '~/modules/spells_and_abilities/screens/SpellAndAbilityDetailScreen';

const SpellAndAbilityDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }
  return <SpellAndAbilityDetailScreen id={id} />;
};

export default SpellAndAbilityDetailPage;
