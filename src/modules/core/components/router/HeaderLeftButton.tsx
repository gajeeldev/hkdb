import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Pressable } from 'react-native';

const HeaderLeftButton = () => {
  const navigation = useNavigation();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Pressable onPress={onToggle}>
      <Ionicons name="menu" size={24} color="#F5F5F5" style={{ marginLeft: 10 }} />
    </Pressable>
  );
};

export default HeaderLeftButton;