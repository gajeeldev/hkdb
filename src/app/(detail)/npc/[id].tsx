import NpcDetailScreen from "@/modules/npcs/screens/NpcDetailScreen"
import { NoIdScreen } from "@/shared/components/ui/NoIdScreen"
import { useLocalSearchParams } from "expo-router"

const NpcDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	return <NpcDetailScreen id={id} />
}

export default NpcDetailPage