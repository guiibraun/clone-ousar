import { Pessoas } from "./Pessoas"

export const NossoTime = () => {
    return (
        <div className="bg-black min-h-screen bg-[url('/images/bg-nosso-time.png')] bg-right text-white  bg-cover bg-center">
            <div className="flex flex-col container justify-center md:h-screen w-11/12 md:w-full gap-y-4 py-8 md:text-left text-center">
                <h2 className="text-5xl">Nosso Time</h2>
                <p className="md:w-5/12 text-xl">Acreditamos no potencial de pessoas que realmente são apaixonadas pelo que fazem, e que elas têm o poder de mudar a realidade à sua volta.</p>
            </div>
            <Pessoas />
        </div>
    )
}