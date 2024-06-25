import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import Bosses from '../../core/data/bosses.json';
import { globalStyles, GoBack, Subtitle, Title } from '~/modules/core';

export const BossDetailScreen = ({ id }: { id: string | string[] }) => {
  const boss = Bosses.find((boss) => boss.id === id);

  if (!boss) return null;

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: boss.boss,
          headerLeft: () => <GoBack />,
        }}
      />
      <ScrollView>
        <Title text={boss.boss} />

        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {boss.description_1}
        </Text>
        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {boss.description_2}
        </Text>

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

        {boss.dlc && (
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

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
