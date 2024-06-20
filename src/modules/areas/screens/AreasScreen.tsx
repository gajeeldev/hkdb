/* eslint-disable prettier/prettier */
import { Button, globalStyles } from '~/modules/core';
import Areas from '../../core/data/areas.json';
import { Link } from 'expo-router';
import { ScrollView, View } from 'react-native';

export const AreasScreen = () => {
  Areas.sort((a, b) => a.area.localeCompare(b.area));
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {Areas.map((area) => (
          <Link href={`/areas/${area.id}`} asChild key={area.id}>
            <Button title={area.area} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
