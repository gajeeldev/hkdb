import { useLocalSearchParams } from 'expo-router';
import { NoIdScreen } from '~/modules/core';
import NailBottomSheetScreen from '~/modules/nail/screens/NailBottomSheetScreen';

const NailPage = () => {
  const { id } = useLocalSearchParams();

  if (!id) {
    return <NoIdScreen />;
  }
  return <NailBottomSheetScreen id={id} />;
};

export default NailPage;
