import { Pressable } from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { colors } from '../../config/theme/theme';

const HeaderLeftButton = () => {
  const navigation = useNavigation();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Pressable onPress={onToggle}>
      <Ionicons name="menu" size={24} color={colors.textColor} style={{ marginLeft: 10 }} />
    </Pressable>
  );
};

export default HeaderLeftButton;
