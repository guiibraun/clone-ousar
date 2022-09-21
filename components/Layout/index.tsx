import { ReactNode } from "react"
import { Footer } from "../Footer"
import  Header  from "../Header"

type Props = {
    children: ReactNode
}

export const Layout = ({children}: Props) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className="max-w-full mx-auto ">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}