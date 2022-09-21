import { allCases } from '../../../utils/CasesUtils'
import { Cases } from '../../Cases'

export const CasesOusar = () => {
    return (
        <div className="bg-black min-h-screen pt-8 flex justify-center items-center">
            <div className="gap-y-8 flex flex-col w-full">
                <h2 className="text-4xl text-center md:text-5xl text-3xl">Cases de Sucesso</h2>
                <p className='text-white text-center md:text-2xl text-xl mx-auto'>Entenda como os nossos parceiros estão mudando o mercado a sua volta.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-8">
                    {allCases.map((item, index) => (
                        <Cases key={index} path={item.path} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    )
}