import { colors } from '@/infrastructure/config/theme/theme'
import { FullScreenLoader } from '@/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/shared/components/ui/LayoutDetailScreen'
import { Subtitle } from '@/shared/components/ui/Subtitle'
import { useQuery } from '@tanstack/react-query'
import { useSQLiteContext } from 'expo-sqlite'
import { Text } from 'react-native'
import { Item, ParsedItem } from '../types'

const ItemDetailScreen = ({id}: {id: string}) => {
	const db = useSQLiteContext()

	const getItemById = async (id: string) => {
		const result = await db.getFirstAsync<Item>(
			'SELECT * FROM Items WHERE id = ?',
			[id],
		)

		if (!result) {
			throw new Error('Item not found')
		}

		const parsed: ParsedItem = {
			...result,
			images: JSON.parse(result.images),
		}

		return parsed
	}
	const {data: item} = useQuery({
		queryKey: ['item', id],
		queryFn: () => getItemById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!item) return <FullScreenLoader />

	return (
		<LayoutDetailScreen
			images={item.images}
			title={item.name}
			firstDescription={item.description_1}
			secondDescription={item.description_2}
		>
			{item.effects && (
				<>
					<Subtitle text='Effects' />
					<Text style={{color: colors.textColor}}>{item.effects}</Text>
				</>
			)}
			<Subtitle text='Type' />
			<Text style={{color: colors.textColor}}>{item.type}</Text>
			<Subtitle text='Use' />
			<Text style={{color: colors.textColor}}>{item.use}</Text>
			<Subtitle text='How to acquire' />
			<Text style={{color: colors.textColor}}>{item.how_to_acquire}</Text>
		</LayoutDetailScreen>
	)
}

export default ItemDetailScreen
