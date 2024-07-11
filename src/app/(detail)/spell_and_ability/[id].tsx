import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import { DreamNailScreen, SpellAndAbilityDetailScreen } from '~/modules/spells_and_abilities';

const SpellAndAbilityDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }

  if (id === '40393504-1884-4717-a3b7-b50d6394be7e') {
    return <DreamNailScreen id={id} />;
  }

  return <SpellAndAbilityDetailScreen id={id} />;
};

export default SpellAndAbilityDetailPage;
