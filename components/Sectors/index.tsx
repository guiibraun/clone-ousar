import Image, { StaticImageData } from "next/image"
import Flecha from '../../public/images/Flecha.png'
import { SectorOusarType } from "../../types/SectorsType"

type Props = {
    name: string,
    path: StaticImageData
}

export const Sectors = ({name, path}: Props) => {
    return (
        <>
            <div className="flex flex-col gap-y-8 items-center">
                <Image src={path} width={118} height={38}/>
                <Image src={Flecha} />
                <div className="text-white text-red text-xl font-medium	">{name}</div>
            </div>

        </>

    )
}