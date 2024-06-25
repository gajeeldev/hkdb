import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import EnemyDetailScreen from '~/modules/enemies/screens/EnemyDetailScreen';

const EnemyDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }
  return <EnemyDetailScreen id={id} />;
};

export default EnemyDetailPage;
