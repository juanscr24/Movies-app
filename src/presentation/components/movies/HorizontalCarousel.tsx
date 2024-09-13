import React, { FC, useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { MoviePoster } from './MoviePoster'

export const HorizontalCarousel: FC<{ movies: Movie[], title?: string, loadNextPage?: () => void }> = ({ movies, title, loadNextPage }) => {

    const isLoading = useRef(false)

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200)
    }, [movies])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent

        const inEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
        if (!inEndReached) return

        isLoading.current = true

        //cargar las siguientes peliculas
        loadNextPage && loadNextPage()
    }

    return (
        <View
            style={{ height: title ? 260 : 220 }}
        >
            {
                title && <Text style={{ fontSize: 30, fontWeight: '300', marginLeft: 10, marginBottom: 10 }}>{title}</Text>
            }

            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={item => item.id.toString()
                }
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
            />

        </View>
    )
}