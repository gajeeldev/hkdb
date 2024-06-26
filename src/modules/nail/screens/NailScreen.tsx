import { ScrollView, View } from 'react-native';
import Nail from '../../../modules/core/data/nail.json';
import { Button, globalStyles } from '~/modules/core';
import { Link } from 'expo-router';

export const NailScreen = () => {
  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {Nail.map((nail) => (
          <Link href={`(detail)/nail/${nail.id}`} asChild key={nail.id}>
            <Button title={nail.nail} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
