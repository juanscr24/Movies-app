import { View } from 'react-native';
import { HomeScreen } from '../src/presentation/screens/home/HomeScreen';
import { useSegments } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Page() {
    const { top } = useSafeAreaInsets()

    return (
        <View style={{ marginTop: top }}>
            <HomeScreen />
        </View>
    );
}