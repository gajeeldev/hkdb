import {
	DreamNailScreen,
	SpellAndAbilityDetailScreen,
} from '@/modules/spells_and_abilities'
import { NoIdScreen } from '@/shared/components/ui/NoIdScreen'
import { useLocalSearchParams } from 'expo-router'

const SpellAndAbilityDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	if (id === '71fe0163-3067-43ac-94da-8a9765f3f23f') {
		return <DreamNailScreen id={id} />
	}

	return <SpellAndAbilityDetailScreen id={id} />
}

export default SpellAndAbilityDetailPage
