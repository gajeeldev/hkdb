import { ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Button, FullScreenLoader, globalStyles } from '~/modules/core';
import { getCharms } from '../actions/getCharms';

export const CharmsScreen = () => {
  const { data: charms } = useQuery({
    queryKey: ['charms'],
    queryFn: getCharms,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!charms) return <FullScreenLoader/>;

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {charms.map((charm) => (
          <Link href={`(detail)/charm/${charm.id}`} asChild key={charm.id}>
            <Button title={charm.charm} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
