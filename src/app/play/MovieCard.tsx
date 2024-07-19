import { Badge, Card, Center, Image, Overlay, Title } from "@mantine/core"
import classes from "./MovieCard.module.css"

export default function MovieCard({
    title,
    imageUrl,
    showResult,
    isWinner,
    income,
    onClick,
}: {
    title: string
    imageUrl: string
    showResult: boolean
    isWinner: boolean
    income: string
    onClick: () => void
}) {
    return (
        <Card
            shadow="xl"
            padding="lg"
            radius="md"
            withBorder
            className={classes.card}
            onClick={onClick}
        >
            {showResult && (
                <Overlay
                    color={isWinner ? "#2b8a3e" : "#c92a2a"}
                    backgroundOpacity={0.7}
                >
                    <Center h={"100%"}>
                        <Badge
                            size="xl"
                            variant="gradient"
                            gradient={{ from: "blue", to: "green", deg: 118 }}
                        >
                            {income}
                        </Badge>
                    </Center>
                </Overlay>
            )}
            <Title order={2}>{title}</Title>
            <Card.Section mt={"md"}>
                <Image
                    src={imageUrl}
                    height={500}
                    width={300}
                    alt={title + " poster"}
                />
            </Card.Section>
        </Card>
    )
}
