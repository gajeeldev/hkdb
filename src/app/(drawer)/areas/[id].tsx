import { useLocalSearchParams } from 'expo-router';
import { AreaDetailScreen } from '~/modules/areas';
import { NoIdScreen } from '~/modules/core';

const AreasDetailPage = () => {
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

export default AreasDetailPage;
