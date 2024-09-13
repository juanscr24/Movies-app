import { useEffect, useState } from "react"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from '../../core/use-cases'

let popularPage = 1;

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])

    useEffect(() => {
        initialLoad();
    }, [])

    const initialLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher)
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher)
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher)
        const upcomingPromise = UseCases.moviesUpcomingdUseCase(movieDBFetcher)

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setNowPlaying(nowPlayingMovies)
        setPopular(popularMovies)
        setTopRated(topRatedMovies)
        setUpcoming(upcomingMovies)

        setIsLoading(false)
    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,

        popularNextPage: async () => {
            popularPage++;
            const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
                page: popularPage
            })
            setPopular(prev => [...prev, ...popularMovies])
        }
    }
}

