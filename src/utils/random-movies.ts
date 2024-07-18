import { getMovieById } from "@/client/movie-by-id"
import { MOVIE_IDS } from "@/constants/movies"

export const getRandomMovieId = (count: number) => {
    const randomMovieIds: string[] = []
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * MOVIE_IDS.length)
        randomMovieIds.push(MOVIE_IDS[randomIndex])
    }
    return randomMovieIds
}

export async function getRandomMovies() {
    const randomMovieIds = getRandomMovieId(2)
    const movies = await Promise.all(
        randomMovieIds.map(async (movieId) => {
            return await getMovieById(movieId)
        })
    )

    return movies
}
