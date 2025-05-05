import { BossDetailScreen } from "@/modules/bosses"
import { NoIdScreen } from "@/shared/components/ui/NoIdScreen"
import { useLocalSearchParams } from "expo-router"

const BossDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	return <BossDetailScreen id={id} />
}

export default BossDetailPage