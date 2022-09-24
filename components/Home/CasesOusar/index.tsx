import { allCases } from '../../../utils/CasesUtils'
import Image, { StaticImageData } from "next/image"
import { COMPILER_INDEXES } from 'next/dist/shared/lib/constants'

export const CasesOusar = () => {
    return (
        <div className="bg-black min-h-screen pt-8 flex justify-center items-center">
            <div className="gap-y-8 flex flex-col w-full">
                <h2 className="text-4xl text-center md:text-5xl text-3xl">Cases de Sucesso</h2>
                <p className='text-white text-center md:text-2xl text-xl mx-auto'>Entenda como os nossos parceiros estão mudando o mercado a sua volta.</p>
                <div className="grid lg:grid-cols-3 grid-cols-2 mt-8">
                    {allCases.map((item, index) => (
                        <Image src={item.image} layout='responsive' alt='' key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}