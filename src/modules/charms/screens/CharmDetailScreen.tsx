import { View, Text, ScrollView } from 'react-native';
import Charms from '../../core/data/charms.json';
import { Stack } from 'expo-router';
import { globalStyles, GoBack, Subtitle, Title } from '~/modules/core';
import { Image } from 'expo-image';

export const CharmDetailScreen = ({ id }: { id: string | string[] }) => {
  const charm = Charms.find((charm) => charm.id === id);

  if (!charm) return null;

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: charm.charm,
          headerLeft: () => <GoBack link="/charms" />,
        }}
      />
      <ScrollView>
        <Title text={charm.charm} />

        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {charm.description_1}
        </Text>

        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {charm.description_2}
        </Text>

        {charm.notches && (
          <View>
            <Subtitle text="Notches" />
            <View style={{ flexDirection: 'row' }}>
              {Array.from({ length: charm.notches }, (_, index) => (
                <Image
                  key={`notch-${index}`}
                  source={require('../../../assets/icons/Notch.webp')}
                  style={{ width: 50, height: 50 }}
                  transition={1000}
                />
              ))}
            </View>
          </View>
        )}

        <Subtitle text="Effect" />
        <Text style={{ color: 'white' }}>{charm.effect}</Text>

        <Subtitle text="Usefulness" />
        <Text style={{ color: 'white' }}>{charm.usefulness}</Text>

        <Subtitle text="How to acquire" />
        <Text style={{ color: 'white' }}>{charm.how_to_acquire}</Text>


        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
