import { Text, View } from 'react-native';
import { FullScreenLoader, Subtitle } from '~/modules/core';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';
import { useQuery } from '@tanstack/react-query';
import { getNpcById } from '../actions/getNpcById';

const NpcDetailScreen = ({ id }: { id: string | string[] }) => {
  const { data: npc } = useQuery({
    queryKey: ['npc', id],
    queryFn: () => getNpcById(id),
    staleTime: 1000 * 60 * 60, //1 hour
  });

  if (!npc) return <FullScreenLoader />;
  return (
    <LayoutDetailScreen images={npc.images} title={npc.npc} firstDescription={npc.description}>
      <Subtitle text="Type" />
      <Text style={{ color: 'white' }}>{npc.type}</Text>

      {npc.lore && (
        <>
          <Subtitle text="Lore" />
          <Text style={{ color: 'white' }}>{npc.lore}</Text>
        </>
      )}

      {npc.in_game_events && (
        <View>
          <Subtitle text="In-Game Events" />
          <Text style={{ color: 'white' }}>{npc.in_game_events}</Text>
        </View>
      )}

      {npc.dream_nail_dialogue && (
        <View>
          <Subtitle text="Dream Nail Dialogue" />
          {npc.dream_nail_dialogue.map((dialogue) => (
            <Text style={{ color: 'white' }} key={dialogue}>
              {dialogue}
            </Text>
          ))}
        </View>
      )}

      <Subtitle text="Location" />
      <Text style={{ color: 'white' }}>{npc.location}</Text>
    </LayoutDetailScreen>
  );
};

export default NpcDetailScreen;
