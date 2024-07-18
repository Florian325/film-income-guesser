import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@mantine/core/styles.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Film Income Guesser",
    description: "Guess the income of a film",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body className={inter.className}>
                <MantineProvider>
                    <Header />
                    {children}
                </MantineProvider>
            </body>
        </html>
    )
}
