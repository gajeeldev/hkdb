import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

export const GoBack = () => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons
          name={Platform.OS === 'ios' ? 'chevron-back-outline' : 'arrow-back'}
          size={26}
          color="white"
        />
        <Text style={{ color: 'white', fontSize: 18 }}>
          {Platform.OS === 'ios' ? 'Back' : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
