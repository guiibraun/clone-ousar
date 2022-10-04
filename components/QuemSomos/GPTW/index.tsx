import Image from "next/image"
import GPTWLogo from '../../../public/images/selo-gptw.png'

export const GPTW = () => {
    return (
        <div className="md:py-32 py-8 gap-x-16 gap-y-8 md:text-left text-center mx-auto container grid lg:grid-cols-2 grid-cols-1">
            <div className="">
                <h2 className="md:text-6xl text-3xl md:mr-16">
                    Reconhecida como uma das melhores empresas para se trabalhar no País.
                </h2>
            </div>
            <div className="text-center">
                <Image src={GPTWLogo} alt="" />
            </div>
        </div>
    )
}