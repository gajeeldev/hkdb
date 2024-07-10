import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import {
  CycleSlashScreen,
  DashSlashScreen,
  DreamgateScreen,
  DreamNailScreen,
  GreatSlashScreen,
  SpellAndAbilityDetailScreen,
} from '~/modules/spells_and_abilities';

const SpellAndAbilityDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }

  if (id === '40393504-1884-4717-a3b7-b50d6394be7e') {
    return <DreamNailScreen id={id} />;
  }

  if (id === '57e8f2e9-8a4e-41b8-ad5f-81a3f7382a1c') {
    return <DreamgateScreen id={id} />;
  }

  if (id === 'b0a423bb-f121-4c98-9703-c36dae5f7311') {
    return <CycleSlashScreen id={id} />;
  }

  if (id === '30eb6119-2444-4b97-b1a1-3c82e70120f3') {
    return <DashSlashScreen id={id} />;
  }

  if (id === '06e4a4d6-553d-4886-8aa5-35eb571671ba') {
    return <GreatSlashScreen id={id} />;
  }

  return <SpellAndAbilityDetailScreen id={id} />;
};

export default SpellAndAbilityDetailPage;
