import { useEffect, useState } from "react"
import * as UseCases from "../../core/use-cases"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"
import { fullMovie } from "../../core/entities/movie.entity"

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState<fullMovie>()

    useEffect(() => {
        loadMovie()
    }, [movieId])

    const loadMovie = async () => {
        setIsLoading(true);

        const fullMovie = await UseCases.getMovieByIdCase(movieDBFetcher, movieId)
        setMovie(fullMovie)
        setIsLoading(false)
    }

    return {
        isLoading,
        movie
    }
}