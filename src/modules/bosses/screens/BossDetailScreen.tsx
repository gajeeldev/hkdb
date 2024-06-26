import { View, Text } from 'react-native';
import Bosses from '../../core/data/bosses.json';
import { dlcTypes, Subtitle } from '~/modules/core';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';

export const BossDetailScreen = ({ id }: { id: string | string[] }) => {
  const boss = Bosses.find((boss) => boss.id === id);

  if (!boss) return null;

  return (
    <LayoutDetailScreen
      images={boss.images}
      title={boss.boss}
      firstDescription={boss.description_1}
      secondDescription={boss.description_2}
      dlc={boss.dlc}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <View
          style={
            !boss.has_nail_upgrades && { justifyContent: 'center', alignItems: 'center', flex: 1 }
          }>
          <Text style={{ color: '#f5f5f5', fontSize: 20, fontFamily: 'TrajanPro-Bold' }}>
            Health
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              opacity: 0.5,
              backgroundColor: 'white',
              marginBottom: 10,
            }}
          />

          {boss.health.map((h, index) => (
            <Text key={`boss-health-${index}`} style={{ color: 'white', textAlign: 'center' }}>
              {h}
            </Text>
          ))}
        </View>

        {/* nail upgrades */}

        {boss.has_nail_upgrades && (
          <View>
            <Text style={{ color: '#f5f5f5', fontSize: 20, fontFamily: 'TrajanPro-Bold' }}>
              Nail Upgrades
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                opacity: 0.5,
                backgroundColor: 'white',
                marginBottom: 10,
              }}
            />

            <View>
              {Array.from([0, 1, 2, 3, 4], (nailLevel) => (
                <Text
                  key={`nail-level-${nailLevel}`}
                  style={{ color: 'white', textAlign: 'center' }}>
                  {nailLevel}
                </Text>
              ))}
            </View>
          </View>
        )}
      </View>

      {boss.dlc !== dlcTypes.Bestiary && (
        <View>
          <Subtitle text="DLC" />
          <Text style={{ color: 'white' }}>{boss.dlc}</Text>
        </View>
      )}

      {boss.lore && (
        <View>
          <Subtitle text="Lore" />
          <Text style={{ color: 'white' }}>{boss.lore}</Text>
        </View>
      )}

      <Subtitle text="Location" />
      <Text style={{ color: 'white' }}>{boss.location}</Text>
    </LayoutDetailScreen>
  );
};
