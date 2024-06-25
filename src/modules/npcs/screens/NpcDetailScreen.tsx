import { View, Text, ScrollView } from 'react-native';
import Npcs from '../../core/data/npcs.json';
import { globalStyles, GoBack, Subtitle, Title } from '~/modules/core';
import { Stack } from 'expo-router';

const NpcDetailScreen = ({ id }: { id: string | string[] }) => {
  const npc = Npcs.find((npc) => npc.id === id);

  if (!npc) return null;
  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: npc.npc,
          headerLeft: () => <GoBack />,
        }}
      />
      <ScrollView>
        <Title text={npc.npc} />

        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {npc.description}
        </Text>

        <Subtitle text="Type" />
        <Text style={{ color: 'white' }}>{npc.type}</Text>

        {npc.lore && (
          <>
            <Subtitle text="Lore" />
            <Text style={{ color: 'white' }}>{npc.lore}</Text>
          </>
        )}

        <Subtitle text="Location" />
        <Text style={{ color: 'white' }}>{npc.location}</Text>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

export default NpcDetailScreen;
