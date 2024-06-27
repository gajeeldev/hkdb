import { ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Button, FullScreenLoader, globalStyles } from '~/modules/core';
import { getNpcs } from '../actions/getNpcs';
export const NpcsScreen = () => {
  const { data: npcs } = useQuery({
    queryKey: ['npcs'],
    queryFn: getNpcs,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!npcs) return <FullScreenLoader />;
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {npcs.map((npc) => (
          <Link href={`(detail)/npc/${npc.id}`} asChild key={npc.id}>
            <Button title={npc.npc} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
