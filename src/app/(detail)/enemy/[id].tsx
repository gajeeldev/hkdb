import EnemyDetailScreen from "@/modules/enemies/screens/EnemyDetailScreen"
import { NoIdScreen } from "@/shared/components/ui/NoIdScreen"
import { useLocalSearchParams } from "expo-router"

const EnemyDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}
	return <EnemyDetailScreen id={id} />
}

export default EnemyDetailPage