import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import NpcDetailScreen from '~/modules/npcs/screens/NpcDetailScreen';

const NpcDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }
  return <NpcDetailScreen id={id} />;
};

export default NpcDetailPage;
