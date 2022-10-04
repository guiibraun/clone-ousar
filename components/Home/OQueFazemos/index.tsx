import { sectorOusar } from '../../../utils/SectorsOusar'
import { Setores } from '../../Setores'


export const OQueFazemos = () => {
    return (
        <div className="bg-black min-h-screen py-8 flex justify-center items-center" id="o-que-fazemos">
            <div className="container gap-y-8 flex flex-col   max-w-6xl">
                <h2 className="text-4xl text-center md:text-5xl text-3xl">O que Fazemos</h2>
                <p className='text-white text-center md:text-2xl text-xl mx-auto'>Acompanhamos, identificamos e reagimos em tempo real aos fatores de disrupção tecnológica e social que afetam organizações mundo afora.</p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-24 text-center justify-center items-center">
                    {sectorOusar.map((item, index) => (
                        <Setores key={index} name={item.name} path={item.path} />
                    ))}
                </div>
            </div>
        </div>

    )
}