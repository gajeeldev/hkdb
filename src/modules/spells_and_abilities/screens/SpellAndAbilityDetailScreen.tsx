import { blurhash } from '@/infrastructure/config/constants/constans'
import { colors, globalStyles } from '@/infrastructure/config/theme/theme'
import DialogueDescription from '@/shared/components/dividers/DialogueDescription'
import { GoBack } from '@/shared/components/GoBack'
import { FullScreenLoader } from '@/shared/components/ui/FullScreenLoader'
import { Subtitle } from '@/shared/components/ui/Subtitle'
import { useQuery } from '@tanstack/react-query'
import { Image } from 'expo-image'
import { Stack } from 'expo-router'
import { useSQLiteContext } from 'expo-sqlite'
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ParsedSpellAndAbility, SpellAndAbility } from '../types'

export const SpellAndAbilityDetailScreen = ({id}: {id: string}) => {
	const {top} = useSafeAreaInsets()
	const {width, height} = useWindowDimensions()
	const db = useSQLiteContext()

	const getSpellAndAbilityById = async (id: string) => {
		const result = await db.getFirstAsync<SpellAndAbility>(
			'SELECT * FROM SpellsAndAbilities WHERE id = ?',
			[id],
		)

		if (!result) {
			throw new Error('Spell and Ability not found')
		}

		const parsed: ParsedSpellAndAbility = {
			...result,
			images: JSON.parse(result.images),
			modifiers: JSON.parse(result.modifiers),
		}

		return parsed
	}

	const {data: spellAndAbility} = useQuery({
		queryKey: ['spellAndAbility', id],
		queryFn: () => getSpellAndAbilityById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!spellAndAbility) return <FullScreenLoader />

	return (
		<View style={globalStyles.container}>
			<Stack.Screen
				options={{
					title: spellAndAbility.name,
					headerLeft: () => <GoBack />,
				}}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingTop: Platform.OS === 'ios' ? top + 100 : 0,
				}}
			>
				<View style={styles.imageContainer}>
					<Image
						source={{uri: spellAndAbility.images[0]}}
						contentFit='contain'
						style={{width: width, height: height * 0.25, marginHorizontal: 7}}
						placeholder={blurhash}
						transition={1000}
					/>
				</View>

				<DialogueDescription
					firstDescription={spellAndAbility.inventory_description_1}
					secondDescription={spellAndAbility.inventory_description_2}
				/>

				<View style={styles.imageContainer}>
					<Image
						source={{uri: spellAndAbility.images[1]}}
						contentFit='contain'
						style={{width: width, height: height * 0.25, marginHorizontal: 7}}
						placeholder={blurhash}
						transition={1000}
					/>
				</View>

				<DialogueDescription
					firstDescription={spellAndAbility.prompt_description_1}
					secondDescription={spellAndAbility.prompt_description_2}
				/>

				<Subtitle text='Type' />
				<Text style={{color: colors.textColor}}>{spellAndAbility.type}</Text>

				<Subtitle text='Function' />
				<Text style={{color: colors.textColor}}>
					{spellAndAbility.function}
				</Text>

				{spellAndAbility.modifiers && (
					<View>
						<Subtitle text='Modifiers' />
						{spellAndAbility.modifiers?.map((modifier) => (
							<Text style={{color: colors.textColor}} key={modifier}>
								{modifier}
							</Text>
						))}
					</View>
				)}

				<Subtitle text='How to acquire' />
				<Text style={{color: colors.textColor}}>
					{spellAndAbility.how_to_acquire}
				</Text>

				<View style={{height: 20}} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
})
