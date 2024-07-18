import { Container, Text, Title } from "@mantine/core"
import classes from "./Header.module.css"
import ColorScheme from "./ColorScheme"

export default function Header() {
    return (
        <header className={classes.header}>
            <Container className={classes.inner}>
                <Text
                    component={Title}
                    order={1}
                    variant="gradient"
                    gradient={{
                        from: "grape",
                        to: "orange",
                        deg: 118,
                    }}
                >
                    Film Income Guesser
                </Text>
                <ColorScheme />
            </Container>
        </header>
    )
}
