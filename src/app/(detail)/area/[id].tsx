import { useLocalSearchParams } from 'expo-router';
import { AreaDetailScreen } from '~/modules/areas';
import { NoIdScreen } from '~/modules/core';

const AreaDetailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }

  return (
    <>
      <AreaDetailScreen id={id} />
    </>
  );
};

export default AreaDetailPage;
