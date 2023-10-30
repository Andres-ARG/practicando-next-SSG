import Head from "next/head"
import { NavBar } from "../ui"

type props = {
    children?: React.ReactNode,
    title?: string
}

export const Layout = ({children, title}: props) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Andres Brainovich"/>
            <meta name="description" content="Informacion sobre el pokemon XXX"/>
            <meta name="keywords" content="XXX. Pokemon, pokedex"/>
        </Head>
        <NavBar />
        <main>
            {children}
        </main>
    </>
  )
}
