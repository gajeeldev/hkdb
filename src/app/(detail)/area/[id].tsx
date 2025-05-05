import { AreaDetailScreen } from "@/modules/areas"
import { NoIdScreen } from "@/shared/components/ui/NoIdScreen"
import { useLocalSearchParams } from "expo-router"

const AreaDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	return (
		<>
			<AreaDetailScreen id={id} />
		</>
	)
}

export default AreaDetailPage