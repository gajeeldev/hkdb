import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Enemies from '../../core/data/enemies.json';
import { dlcTypes, globalStyles, GoBack, Subtitle, Title } from '~/modules/core';
import { Stack } from 'expo-router';

const EnemyDetailScreen = ({ id }: { id: string | string[] }) => {
  const enemy = Enemies.find((enemy) => enemy.id === id);

  if (!enemy) return null;

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: enemy.enemy,
          headerLeft: () => <GoBack />,
        }}
      />
      <ScrollView>
        <Title text={enemy.enemy} />

        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {enemy.description_1}
        </Text>
        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {enemy.description_2}
        </Text>

        {enemy.health > 0 && (
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 20 }}>
            <Text style={{ color: '#f5f5f5', fontSize: 20, fontFamily: 'TrajanPro-Bold' }}>
              Health
            </Text>

            <Text style={{ color: 'white' }}>{enemy.health}</Text>
          </View>
        )}

        {enemy.dlc !== dlcTypes.HunterJournal ? (
          <>
            <Subtitle text="DLC" />
            <Text style={{ color: 'white' }}>{enemy.dlc}</Text>
          </>
        ) : null}

        <Subtitle text="Location" />
        <Text style={{ color: 'white' }}>{enemy.location}</Text>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

export default EnemyDetailScreen;
