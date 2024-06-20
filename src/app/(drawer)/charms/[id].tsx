import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import { CharmDetailScreen } from '~/modules/charms';

const CharmsDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }
  return <CharmDetailScreen id={id} />;
};

export default CharmsDetailPage;
