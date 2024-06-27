import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { dlcTypes, FullScreenLoader, Subtitle } from '~/modules/core';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';
import { getEnemyById } from '../actions/getEnemyById';

const EnemyDetailScreen = ({ id }: { id: string | string[] }) => {
  const { data: enemy } = useQuery({
    queryKey: ['enemy', id],
    queryFn: () => getEnemyById(id),
    staleTime: 1000 * 60 * 60, //1 hour
  });

  if (!enemy) return <FullScreenLoader/>;

  return (
    <LayoutDetailScreen
      images={enemy.images}
      title={enemy.enemy}
      firstDescription={enemy.description_1}
      secondDescription={enemy.description_2}
      dlc={enemy.dlc}>
      {enemy.health > 0 && (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 20 }}>
          <Text style={{ color: '#f5f5f5', fontSize: 20, fontFamily: 'TrajanPro-Bold' }}>
            Health
          </Text>

          <Text style={{ color: 'white' }}>{enemy.health}</Text>
        </View>
      )}

      {enemy.dlc !== dlcTypes.Bestiary ? (
        <>
          <Subtitle text="DLC" />
          <Text style={{ color: 'white' }}>{enemy.dlc}</Text>
        </>
      ) : null}

      <Subtitle text="Location" />
      <Text style={{ color: 'white' }}>{enemy.location}</Text>
    </LayoutDetailScreen>
  );
};

export default EnemyDetailScreen;
