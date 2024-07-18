import { Button, Center, Container, Stack, Title } from "@mantine/core"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function Home() {
    return redirect("/play")
}
