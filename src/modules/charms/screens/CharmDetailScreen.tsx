import { View, Text } from 'react-native';
import { FullScreenLoader, Subtitle } from '~/modules/core';
import { Image } from 'expo-image';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';
import { useQuery } from '@tanstack/react-query';
import { getCharmById } from '../actions/getCharmById';

export const CharmDetailScreen = ({ id }: { id: string | string[] }) => {
  const { data: charm } = useQuery({
    queryKey: ['charm', id],
    queryFn: () => getCharmById(id),
    staleTime: 1000 * 60 * 60, //1 hour
  });

  if (!charm) return <FullScreenLoader />;

  return (
    <LayoutDetailScreen
      images={charm.images}
      title={charm.charm}
      firstDescription={charm.description_1}
      secondDescription={charm.description_2}>
      {charm.notches && (
        <View>
          <Subtitle text="Notches" />
          <View style={{ flexDirection: 'row' }}>
            {Array.from({ length: charm.notches }, (_, index) => (
              <Image
                key={`notch-${index}`}
                source={require('../../../assets/icons/Notch.webp')}
                style={{ width: 50, height: 50 }}
                transition={1000}
              />
            ))}
          </View>
        </View>
      )}

      <Subtitle text="Effect" />
      <Text style={{ color: 'white' }}>{charm.effect}</Text>

      <Subtitle text="Usefulness" />
      <Text style={{ color: 'white' }}>{charm.usefulness}</Text>

      <Subtitle text="How to acquire" />
      <Text style={{ color: 'white' }}>{charm.how_to_acquire}</Text>
    </LayoutDetailScreen>
  );
};
