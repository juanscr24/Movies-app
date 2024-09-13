import { ScrollView, Text, View } from 'react-native';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { useMovies } from '../../hooks/useMovies';

export const HomeScreen = () => {

    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

    if (isLoading) {
        return (<Text>Cargando...</Text>)
    }

    return (
        <ScrollView>
            <View style={{ paddingBottom: 30 }}>
                {/*Principal*/}
                <PosterCarousel movies={nowPlaying} />
                {/*Popular*/}
                <HorizontalCarousel loadNextPage={popularNextPage} movies={popular} title='Populars' />
                {/*TopRated*/}
                <HorizontalCarousel movies={topRated} title='Top Rated' />
                {/*Upcoming*/}
                <HorizontalCarousel movies={upcoming} title='Upcoming' />
            </View>
        </ScrollView>
    )
}
