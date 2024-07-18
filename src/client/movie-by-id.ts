import { Movie } from "./types/movie"

export async function getMovieById(movieId: string) {
    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${movieId}`
    )
    const movie: Movie = await response.json()
    return movie
}
