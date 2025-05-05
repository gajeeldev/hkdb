import { globalStyles } from '@/infrastructure/config/theme/theme'
import { FullScreenLoader } from '@/shared/components/ui/FullScreenLoader'
import { useQuery } from '@tanstack/react-query'
import { useSQLiteContext } from 'expo-sqlite'
import { ScrollView, View } from 'react-native'
import { NailCard } from '../components/NailCard'
import { Nail, ParsedNail } from '../types'



export const NailScreen = () => {
	const db = useSQLiteContext()

	const getNails = async () => {
		const result = await db.getAllAsync<Nail>('SELECT * FROM Nail')
		const parsed: ParsedNail[] = result.map((nail) => ({
			...nail,
			images: JSON.parse(nail.images),
		}))
		return parsed
	}

	const {data: nails} = useQuery({
		queryKey: ['nails'],
		queryFn: getNails,
		staleTime: 1000 * 60 * 60, // 1 hour
	})

	if (!nails) return <FullScreenLoader />
	return (
		<View style={globalStyles.container}>
			<ScrollView style={{paddingTop: 20}} showsVerticalScrollIndicator={false}>
				{nails.map((nail, index) => (
					<NailCard
						key={nail.id}
						description={nail.description}
						nail={nail.name}
						images={nail.images}
						index={index}
						damage={nail.damage}
						upgrade_cost={nail.upgrade_cost}
					/>
				))}

				<View style={{height: 20}} />
			</ScrollView>
		</View>
	)
}
