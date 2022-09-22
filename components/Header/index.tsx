import Image from "next/image"
import Link from "next/link"
import { memo, useEffect, useState } from "react"
import LogoOusar from '../../public/images/logo-ousar.png'
import { navLinks } from "../../utils/menu"



const Header = () => {
    const [menu, setMenu] = useState(false)

    const showMenu = () => {
        if(menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }


    return (
        <div className="relative container">
            <div className="absolute text-white grid grid-cols-2 w-full md:py-8 p-4">
                <div>
                    <Image src={LogoOusar} width={106} height={17} alt=''/>
                </div>
                <button className="lg:hidden justify-end flex" onClick={showMenu}>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <nav>
                    {/* Menu Mobile */}

                    {menu && 
                        <div className="lg:hidden">
                            <ul className="flex flex-col p-4 mt-4 bg-black rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                                {navLinks.map((item, index) => (
                                    <li key={index}><Link href={item.path[0]}>{item.label}</Link></li>
                                ))}
                            </ul>
                        </div>
                    }

                    {/*  ------------------------- */}


                    {/* Menu Desktop */}
                    <ul className="lg:flex justify-end gap-x-4 hidden">
                        {navLinks.map((item, index) => (
                            <li key={index}><Link href={item.path[0]}>{item.label}</Link></li>
                        ))}
                    </ul>
                    {/* Fim Menu Desktop */}
                </nav>
            </div>
        </div>
    )
}

export default memo(Header)