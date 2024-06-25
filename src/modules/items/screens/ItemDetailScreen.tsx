import { View, Text, ScrollView } from 'react-native';
import Items from '../../core/data/items.json';
import { globalStyles, GoBack, Subtitle, Title } from '~/modules/core';
import { Stack } from 'expo-router';

const ItemDetailScreen = ({ id }: { id: string | string[] }) => {
  const item = Items.find((item) => item.id === id);

  if (!item) return null;
  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: item.item,
          headerLeft: () => <GoBack />,
        }}
      />
      <ScrollView>
        <Title text={item.item} />

        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {item.description_1}
        </Text>
        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {item.description_2}
        </Text>

        <Subtitle text="Effects" />
        <Text style={{ color: 'white' }}>{item.effects}</Text>
        <Subtitle text="Type" />
        <Text style={{ color: 'white' }}>{item.type}</Text>
        <Subtitle text="Use" />
        <Text style={{ color: 'white' }}>{item.use}</Text>
        <Subtitle text="How to acquire" />
        {item.how_to_acquire.map((howToAcquire, index) => (
          <Text style={{ color: 'white' }} key={index}>
            {howToAcquire}
          </Text>
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

export default ItemDetailScreen;
