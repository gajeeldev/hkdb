import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, TouchableOpacity, View } from 'react-native';

export const GoHome = () => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.replace('/')}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(245, 245, 245, 0.15)',
          borderRadius: 24,
          padding: 3,
        }}>
        <Ionicons
          name={Platform.OS === 'ios' ? 'chevron-back-outline' : 'arrow-back'}
          size={26}
          color="white"
          style={{ left: Platform.OS === 'ios' ? -2 : 0 }}
        />
      </View>
    </TouchableOpacity>
  );
};
