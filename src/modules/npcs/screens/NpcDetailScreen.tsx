import { View, Text, ScrollView } from 'react-native';
import Npcs from '../../core/data/npcs.json';
import { globalStyles, GoBack, Subtitle, Title } from '~/modules/core';
import { Stack } from 'expo-router';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';

const NpcDetailScreen = ({ id }: { id: string | string[] }) => {
  const npc = Npcs.find((npc) => npc.id === id);

  if (!npc) return null;
  return (
    <LayoutDetailScreen
    images={npc.images}
    title={npc.npc}
    firstDescription={npc.description}
    >
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
    </LayoutDetailScreen>
  );
};

export default NpcDetailScreen;
