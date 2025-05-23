
import { blurhash } from '@/infrastructure/config/constants/constans'
import { colors } from '@/infrastructure/config/theme/theme'
import { Image } from 'expo-image'
import { Link, type Href } from 'expo-router'
import { Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

interface Props {
	href: Href
	title: string
	image: string
	index: number
}
export const BossCard = ({href, title, image, index}: Props) => {
	const {width, height} = useWindowDimensions()

	return (
		<Animated.View entering={FadeInDown.delay(200 * index)}>
			<Link href={href} asChild>
				<Pressable
					style={{
						...styles.container,
						width: width / 2.25,
						height: height / 4.5,
					}}
				>
					<Image
						source={image}
						style={{width: '100%', height: height / 8}}
						contentFit='contain'
						placeholder={blurhash}
						priority='high'
					/>
					<Text
						style={{
							...styles.text,
							fontSize: width / 30,
						}}
						numberOfLines={2}
						adjustsFontSizeToFit
					>
						{title}
					</Text>
				</Pressable>
			</Link>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 10,
		backgroundColor: colors.cardBackground,
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
		color: '#F5F5F5',
		fontFamily: 'TrajanPro-Bold',
		paddingVertical: 10,
		textAlign: 'center',
	},
})
