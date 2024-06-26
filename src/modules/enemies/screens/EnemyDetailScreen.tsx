import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Enemies from '../../core/data/enemies.json';
import { dlcTypes, globalStyles, GoBack, Subtitle, Title } from '~/modules/core';
import { Stack } from 'expo-router';
import LayoutDetailScreen from '~/modules/core/components/ui/LayoutDetailScreen';

const EnemyDetailScreen = ({ id }: { id: string | string[] }) => {
  const enemy = Enemies.find((enemy) => enemy.id === id);

  if (!enemy) return null;

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
