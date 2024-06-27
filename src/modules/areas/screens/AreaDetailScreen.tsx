import { Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { FullScreenLoader, Subtitle } from '~/modules/core';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';
import { getAreaById } from '../actions/getAreaById';

export const AreaDetailScreen = ({ id }: { id: string | string[] }) => {
  const { data: area } = useQuery({
    queryKey: ['area', id],
    queryFn: () => getAreaById(id),
    staleTime: 1000 * 60 * 60, //1 hour
  });

  if (!area) return <FullScreenLoader/>;

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
