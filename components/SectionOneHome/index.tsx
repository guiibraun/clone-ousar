import Link from "next/link"

export const SectionOneHome = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 items-center justify-between container">
                <div className='flex flex-col gap-y-8 text-center md:text-left justify-center items-center md:items-start'>
                    <h2 className="text-4xl">Bem vindo ao grupo Ousar</h2>
                    <p className='text-white'>Somos um ecossistema de núcleos especializados em
                        inteligência corporativa e marketing digital.</p>
                    <Link href="/quem-somos"><a className="bg-red p-4 rounded text-white w-fit">Quem Somos</a></Link>
                </div>
                <div>
                    {/* <iframe className="w-full" height="315" src="https://www.youtube.com/embed/5a84tXRpBJI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                </div>
            </div>
        </>
    )
}