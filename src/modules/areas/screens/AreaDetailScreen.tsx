import { StyleSheet, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { colors, FullScreenLoader, Subtitle } from '~/modules/core';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';
import { getAreaById } from '../actions/getAreaById';

export const AreaDetailScreen = ({ id }: { id: string | string[] }) => {
  const { data: area } = useQuery({
    queryKey: ['area', id],
    queryFn: () => getAreaById(id),
    staleTime: 1000 * 60 * 60, //1 hour
  });

  if (!area) return <FullScreenLoader />;

  return (
    <LayoutDetailScreen
      images={area.images}
      title={area.area}
      firstDescription={area.game_description}>
      <Subtitle text="Description" />
      <Text style={styles.text}>{area.description}</Text>

      <Subtitle text="Lore" />
      <Text style={styles.text}>{area.lore}</Text>

      <Subtitle text="How to Access" />
      <Text style={styles.text}>{area.how_to_access}</Text>
    </LayoutDetailScreen>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.textColor,
    marginTop: 20,
  },
});
