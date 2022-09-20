import Image, { StaticImageData } from "next/image"

type Props = {
    path: string,
    image: StaticImageData
}

export const Cases = ({path, image}: Props) => {
    return (
        <>
            <Image src={image} layout='responsive'/>
        </>
    )
}