import { Button, Center, Container, Stack, Title } from "@mantine/core"
import { getRandomMovies } from "@/utils/random-movies"
import MovieCards from "./MovieCards"
import { revalidatePath } from "next/cache"

export default async function PlayPage() {
    const movies = await getRandomMovies()
    return (
        <Container py={"lg"}>
            <Stack gap={"xl"}>
                <Center>
                    <Title order={1}>Which movie made the most money?</Title>
                </Center>
                <Center>
                    <MovieCards movies={movies} />
                </Center>
                <Center>
                    <form
                        action={async () => {
                            "use server"
                            return revalidatePath("/play")
                        }}
                    >
                        <Button type="submit" variant="gradient">
                            Play Again
                        </Button>
                    </form>
                </Center>
            </Stack>
        </Container>
    )
}
