import { ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getAreas } from '../actions/getAreas';
import { Button, FullScreenLoader, globalStyles } from '~/modules/core';

export const AreasScreen = () => {
  const { data: areas } = useQuery({
    queryKey: ['areas'],
    queryFn: getAreas,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!areas) return <FullScreenLoader/>;

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {areas.map((area) => (
          <Link href={`(detail)/area/${area.id}`} asChild key={area.id}>
            <Button title={area.area} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
