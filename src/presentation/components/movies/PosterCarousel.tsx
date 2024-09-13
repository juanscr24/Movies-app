import { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { MoviePoster } from './MoviePoster'

export const PosterCarousel: FC<{ movies: Movie[], height?: number }> = ({ height = 440, movies }) => {
    return (
        <View style={{ height }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    movies.map(movie => <MoviePoster key={movie.id} movie={movie} />)
                }
            </ScrollView>
        </View>
    )
}
