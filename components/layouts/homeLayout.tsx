
import { FC } from "react"

import Head from "next/head"

interface Props {
    children: JSX.Element[] | JSX.Element,
    title?: string
}
const HomeLayout : FC<Props>= ({ children, title }) => {
    return (
        <>
            <Head>
                <title> {title || 'Pokedex App'}</title>
                <meta name="author" content="Victor Hurtado" />
                <meta name="description" content="Is a pokedex for someone pokemons" />
                <meta name="keywords" content={`${title},"pokemon", "pokedex"`} />
            </Head>
            {/* <Navbar /> */}
            <main style={{
                padding: '40px 20px',
                backgroundImage: `url('/mountains.webp')`,
                backgroundSize: 'cover',
                minHeight:'100vh'
            }}>
                {children}
            </main>
        </>
    )
}

export default HomeLayout