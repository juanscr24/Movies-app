import { FC } from 'react'
import { Text, View } from 'react-native'
import { MovieHeader } from '../../components/movie/MovieHeader'
import { useMovie } from '../../hooks/useMovie'

export const DetailsScreen: FC<{ route: any }> = ({ route }) => {

    const { movieId } = route.params;

    const { isLoading, movie } = useMovie(movieId)

    if (isLoading) {
        return <Text>Loading</Text>
    }


    return (
        <View>
            <MovieHeader originalTitle={movie!.originalTitle} poster={movie!.poster} title={movie!.title} />
            <Text>Details</Text>
        </View>
    )
}
