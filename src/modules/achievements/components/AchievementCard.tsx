
import { blurhash } from '@/infrastructure/config/constants/constans'
import { colors } from '@/infrastructure/config/theme/theme'
import { Image } from 'expo-image'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

interface Props {
	name: string
	description: string
	images: string[]
	index: number
}

export const AchievementsCard = ({
	name,
	description,
	images,
	index,
}: Props) => {
	const {width, height} = useWindowDimensions()

	return (
		<Animated.View
			entering={FadeInDown.delay(200 * index)}
			style={styles.container}
		>
			<Image
				source={images[0]}
				style={{width: width / 3.5, height: height / 6.5}}
				contentFit='contain'
				placeholder={blurhash}
				priority='high'
			/>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{name}</Text>
				<Text adjustsFontSizeToFit style={styles.description}>
					{description}
				</Text>
			</View>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 10,
	},
	textContainer: {
		gap: 10,
		flex: 1,
	},
	title: {
		color: colors.textColor,
		fontSize: 24,
		fontWeight: 'bold',
	},
	description: {
		color: colors.textColor,
		fontSize: 16,
	},
})
