import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: '#252525' }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <DrawerItem
        label="About"
        onPress={() => router.push('/about')}
        icon={({ color, size }) => <Ionicons name="information-circle" color={color} size={size} />}
      />
    </View>
  );
};

export default CustomDrawerContent;