import { useLocalSearchParams } from 'expo-router';
import { BossDetailScreen } from '~/modules/bosses';
import { NoIdScreen } from '~/modules/core';

const BossesDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }

  return <BossDetailScreen id={id} />;
};

export default BossesDetailPage;
