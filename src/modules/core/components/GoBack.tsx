import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Text, View } from 'react-native';

export const GoBack = ({ link }: { link: string }) => {
  return (
    <Link href={link} style={{ marginLeft: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons
          name={Platform.OS === 'ios' ? 'chevron-back-outline' : 'arrow-back'}
          size={24}
          color="white"
        />
        <Text style={{ color: 'white' }}>{Platform.OS === 'ios' ? 'Back' : null}</Text>
      </View>
    </Link>
  );
};
