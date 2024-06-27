import { ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Button, FullScreenLoader, globalStyles } from '~/modules/core';
import { getNails } from '../actions/getNails';

export const NailScreen = () => {
  const { data: nails } = useQuery({
    queryKey: ['nails'],
    queryFn: getNails,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!nails) return <FullScreenLoader />;
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {nails.map((nail) => (
          <Link href={`(detail)/nail/${nail.id}`} asChild key={nail.id}>
            <Button title={nail.nail} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
