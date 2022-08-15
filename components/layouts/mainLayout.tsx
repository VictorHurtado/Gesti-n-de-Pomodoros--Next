
import { FC } from "react"

import Head from "next/head"

interface Props {
    children: JSX.Element[] | JSX.Element,
    title?: string
}
const MainLayout : FC<Props>= ({ children, title }) => {
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
               
            }}>
                {children}
            </main>
        </>
    )
}

export default MainLayout
