import Link from "next/link"

export const Rodape = () => {
    return (
        <div className="bg-black lg:py-32 py-16 text-rodapeColor text-center md:text-left">
            <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-3 justify-center items-start md:w-full w-11/12	mx-auto">
                <div className="gap-y-4 flex flex-col">
                    <p>Av. Santa Catarina, 1119 – Floresta, Joinville – SC – Sala 01
                        CEP: 89211-307
                    </p>
                    <div></div>
                    <ul>
                        <li>+55 (47) 3375.0458</li>
                        <li>+55 (47) 9 9959.9193</li>
                    </ul>
                </div>
                <div>
                    
                </div>
                <div className="gap-y-4 flex flex-col">
                    <Link href="mailto:contato@agenciaousar.com.br">contato@agenciaousar.com.br</Link>
                    <div>Agência Ousar. © 2019</div>
                </div>

            </div>
            <hr className="w-full max-w-6xl mx-auto mt-8 border-rodapeColor" />
        </div>
    )
}