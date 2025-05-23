
import { blurhash } from '@/infrastructure/config/constants/constans'
import { colors } from '@/infrastructure/config/theme/theme'
import { Image } from 'expo-image'
import { type Href, Link } from 'expo-router'
import { Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

interface Props {
	href: Href
	title: string
	image: string
	index: number
}
export const AreaCard = ({href, title, image, index}: Props) => {
	const {height} = useWindowDimensions()

	return (
		<Animated.View entering={FadeInDown.delay(200 * index)}>
			<Link href={href} asChild>
				<Pressable style={styles.button}>
					<Image
						source={image}
						style={{width: '100%', height: height / 5}}
						contentFit='contain'
						placeholder={blurhash}
						priority='high'
					/>
					<Text style={styles.text}>{title}</Text>
				</Pressable>
			</Link>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 10,
		backgroundColor: '#000',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 10,
		elevation: 10,
	},
	text: {
		color: colors.textColor,
		fontSize: 24,
		fontFamily: 'TrajanPro-Bold',
		paddingVertical: 10,
	},
})
