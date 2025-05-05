import { CharmDetailScreen } from "@/modules/charms"
import { NoIdScreen } from "@/shared/components/ui/NoIdScreen"
import { useLocalSearchParams } from "expo-router"

const CharmDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	return <CharmDetailScreen id={id} />
}

export default CharmDetailPage