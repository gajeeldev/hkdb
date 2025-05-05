import { colors } from '@/infrastructure/config/theme/theme'
import { StyleSheet, Text, View } from 'react-native'

export const NoIdScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={{color: colors.textColor}}>No ID</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
