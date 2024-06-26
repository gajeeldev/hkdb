import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Subtitle } from '~/modules/core';
import Areas from '../../core/data/areas.json';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';

export const AreaDetailScreen = ({ id }: { id: string | string[] }) => {
  const area = Areas.find((area) => area.id === id);

  const { top } = useSafeAreaInsets();

  if (!area) return null;

  return (
    <LayoutDetailScreen
      images={area.images}
      title={area.area}
      firstDescription={area.game_description}>
      <Subtitle text="Description" />
      <Text style={{ color: 'white', marginTop: 20 }}>{area.description}</Text>

      <Subtitle text="Lore" />
      <Text style={{ color: 'white', marginTop: 20 }}>{area.lore}</Text>

      <Subtitle text="How to Access" />
      <Text style={{ color: 'white', marginTop: 20 }}>{area.how_to_access}</Text>
    </LayoutDetailScreen>
  );
};
