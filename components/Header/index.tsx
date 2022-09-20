import Image from "next/image"
import LogoOusar from '../../public/images/logo-ousar.png'

export const Header = () => {
    return (
        <div className="relative container">
            <div className="absolute text-white grid grid-cols-2 w-full container py-4">
                    <div>
                        <Image src={LogoOusar} width={106} height={17} />
                    </div>
                    <nav>
                        <ul className="flex justify-end gap-x-4">
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                        </ul>
                    </nav>
                </div>
            </div>
    )
}