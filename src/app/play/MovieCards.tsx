"use client"

import { Movie } from "@/client/types/movie"
import MovieCard from "./MovieCard"
import { Divider } from "@mantine/core"
import { useEffect, useState } from "react"

function incomeToNumber(income: string): number {
    return Number.parseInt(income.replace("$", "").replace(",", ""))
}

export default function MovieCards({ movies }: { movies: Movie[] }) {
    const [movie1, movie2] = movies
    const income1 = incomeToNumber(movie1.BoxOffice)
    const income2 = incomeToNumber(movie2.BoxOffice)
    const [showResult, setShowResult] = useState(false)
    function onCardClick() {
        setShowResult(true)
    }
    useEffect(() => {
        setShowResult(false)
    }, [movies])
    return (
        <>
            <MovieCard
                title={movie1.Title}
                imageUrl={movie1.Poster}
                showResult={showResult}
                isWinner={income1 > income2}
                income={movie1.BoxOffice}
                onClick={onCardClick}
            />
            <Divider orientation="vertical" mx={"xl"} />
            <MovieCard
                title={movie2.Title}
                imageUrl={movie2.Poster}
                showResult={showResult}
                isWinner={income2 > income1}
                income={movie2.BoxOffice}
                onClick={onCardClick}
            />
        </>
    )
}
