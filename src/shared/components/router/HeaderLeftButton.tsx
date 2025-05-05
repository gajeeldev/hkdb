import { colors } from '@/infrastructure/config/theme/theme'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import { Pressable } from 'react-native'

const HeaderLeftButton = () => {
	const navigation = useNavigation()

	const onToggle = () => {
		navigation.dispatch(DrawerActions.openDrawer())
	}
	return (
		<Pressable onPressIn={onToggle}>
			<Ionicons
				name='menu'
				size={24}
				color={colors.textColor}
				style={{marginLeft: 10}}
			/>
		</Pressable>
	)
}

export default HeaderLeftButton
