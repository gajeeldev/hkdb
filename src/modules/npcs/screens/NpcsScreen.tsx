import { ScrollView, View } from 'react-native';
import Npcs from '../../core/data/npcs.json';
import { Button, globalStyles } from '~/modules/core';
import { Link } from 'expo-router';
export const NpcsScreen = () => {
  const sortedNpcs = [...Npcs].sort((a, b) => a.npc.localeCompare(b.npc));

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {sortedNpcs.map((npc) => (
          <Link href={`(detail)/npc/${npc.id}`} asChild key={npc.id}>
            <Button title={npc.npc} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
