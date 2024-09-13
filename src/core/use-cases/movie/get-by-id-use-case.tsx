import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { fullMovie } from "../../entities/movie.entity";

export const getMovieByIdCase = async (
    fetcher: HttpAdapter,
    movieId: number):
    Promise<fullMovie> => {

    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`)

        const fullMovie = MovieMapper.fromMovieDBtoEntity(movie);

        return fullMovie;

    } catch (error) {
        throw new Error(`cannot get movie by id:${movieId}`)
    }

}