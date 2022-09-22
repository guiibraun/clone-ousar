import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { memo, useEffect, useState } from "react"
import LogoOusar from '../../public/images/logo-ousar.png'
import { navLinks } from "../../utils/menu"
import menuIcon from '../../public/images/menu.svg'


const Header = () => {
    const [menu, setMenu] = useState(false)
    const { pathname } = useRouter()
    const showMenu = () => {
        if(menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

    useEffect(() => {
        setMenu(false)
    }, [pathname])

    return (
        <div className="relative container z-40">
            <div className="absolute text-white grid grid-cols-2 w-full md:py-8 p-4">
                <div>
                    <Link href='/' >
                        <a><Image src={LogoOusar} width={106} height={17} alt='' /></a>
                    </Link>
                </div>

                <button className="lg:hidden justify-end flex" onClick={showMenu}>
                    <Image alt='' src={menuIcon} />
                </button>
                <nav>
                    {/* Menu Mobile */}

                    {menu && 
                        <div className="lg:hidden">
                            <ul className="flex flex-col p-4 mt-4 font-bold bg-black rounded-lg absolute w-11/12 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                                {navLinks.map((item, index) => (
                                    <li key={index}><Link href={item.path[0]}>{item.label}</Link></li>
                                ))}
                            </ul>
                        </div>
                    }

                    {/*  ------------------------- */}


                    {/* Menu Desktop */}
                    <ul className="lg:flex justify-end gap-x-16 hidden font-bold">
                        {navLinks.map((item, index) => (
                            <li key={index} className="hover:text-red"><Link href={item.path[0]}>{item.label}</Link></li>
                        ))}
                    </ul>
                    {/* Fim Menu Desktop */}
                </nav>
            </div>
        </div>
    )
}

export default Header

function useMobileMenu(): [any, any, any] {
    throw new Error("Function not implemented.")
}
