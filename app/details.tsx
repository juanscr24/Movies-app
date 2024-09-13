import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DetailsScreen } from '../src/presentation/screens/details/DetailsScreen';

export default function Page() {
    const { top } = useSafeAreaInsets()

    return (
        <View style={{ marginTop: top }}>
            <DetailsScreen />
        </View>
    );
}