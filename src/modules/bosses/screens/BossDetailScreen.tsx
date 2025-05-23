
import { colors } from '@/infrastructure/config/theme/theme'
import { dlcTypes } from '@/infrastructure/domain/entities'
import { FullScreenLoader } from '@/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/shared/components/ui/LayoutDetailScreen'
import { Subtitle } from '@/shared/components/ui/Subtitle'
import { useQuery } from '@tanstack/react-query'
import { useSQLiteContext } from 'expo-sqlite'
import { StyleSheet, Text, View } from 'react-native'
import { Boss, ParsedBoss } from '../types'

export const BossDetailScreen = ({id}: {id: string}) => {
	const db = useSQLiteContext()

	const getBossById = async (id: string) => {
		const result = await db.getFirstAsync<Boss>(
			'SELECT * FROM Bosses WHERE id = ?',
			[id],
		)

		if (!result) {
			throw new Error('Boss not found')
		}

		const parsed: ParsedBoss = {
			...result,
			images: JSON.parse(result.images),
			dream_nail_dialogue: result.dream_nail_dialogue
				? JSON.parse(result.dream_nail_dialogue)
				: null,
			health: result.health ? JSON.parse(result.health) : null,
			has_nail_upgrades: result.has_nail_upgrades === 1,
		}

		return parsed
	}

	const {data: boss} = useQuery({
		queryKey: ['boss', id],
		queryFn: () => getBossById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!boss) return <FullScreenLoader />

	return (
		<LayoutDetailScreen
			images={boss.images}
			title={boss.name}
			firstDescription={boss.description_1}
			secondDescription={boss.description_2}
			dlc={boss.dlc}
		>
			{/* health and nail upgrades */}
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginTop: 20,
				}}
			>
				{/* health */}
				<View
					style={
						!boss.has_nail_upgrades && {
							justifyContent: 'center',
							alignItems: 'center',
							flex: 1,
						}
					}
				>
					<Text style={styles.text}>Health</Text>
					<View style={styles.divider} />

					{boss.health?.map((h, index) => (
						<Text key={`boss-health-${index}`} style={styles.secondText}>
							{h}
						</Text>
					))}
				</View>

				{/* nail upgrades */}

				{boss.has_nail_upgrades && (
					<View>
						<Text style={styles.text}>Nail Upgrades</Text>
						<View style={styles.divider} />

						<View>
							{Array.from([0, 1, 2, 3, 4], (nailLevel) => (
								<Text key={`nail-level-${nailLevel}`} style={styles.secondText}>
									{nailLevel}
								</Text>
							))}
						</View>
					</View>
				)}
			</View>

			{/* DLC */}
			{boss.dlc !== dlcTypes.Bestiary && (
				<View>
					<Subtitle text='DLC' />
					<Text style={{color: colors.textColor}}>{boss.dlc}</Text>
				</View>
			)}

			{/* lore */}
			{boss.lore && (
				<View>
					<Subtitle text='Lore' />
					<Text style={{color: colors.textColor}}>{boss.lore}</Text>
				</View>
			)}

			{/* in game events */}
			{boss.in_game_events && (
				<View>
					<Subtitle text='In-Game Events' />
					<Text style={{color: colors.textColor}}>{boss.in_game_events}</Text>
				</View>
			)}

			{/* dream nail dialogue */}
			{boss.dream_nail_dialogue && (
				<View>
					<Subtitle text='Dream Nail Dialogue' />
					{boss.dream_nail_dialogue.map((dialogue, index) => (
						<Text key={`dialogue-${index}`} style={{color: colors.textColor}}>
							{dialogue}
						</Text>
					))}
				</View>
			)}

			{/* location */}
			<Subtitle text='Location' />
			<Text style={{color: colors.textColor}}>{boss.location}</Text>
		</LayoutDetailScreen>
	)
}

const styles = StyleSheet.create({
	healthNailContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	text: {
		color: colors.textColor,
		fontSize: 20,
		fontFamily: 'TrajanPro-Bold',
	},
	divider: {
		flex: 1,
		height: 1,
		opacity: 0.5,
		backgroundColor: colors.textColor,
		marginBottom: 10,
	},
	secondText: {
		color: colors.textColor,
		textAlign: 'center',
	},
})
