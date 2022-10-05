import Link from "next/link"
import React from 'react'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export const BemVindo = () => {
    return (
        <div className="bg-black min-h-screen bg-[url('/images/bg-section-one.png')] bg-cover bg-center flex">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-8 items-center justify-between container py-8 px-2 md:pb-16 pt-16 max-w-6xl">
                <div className='flex flex-col gap-y-4 md:gap-y-8 text-center md:text-left justify-center items-center md:items-start'>
                    <h2 className="text-4xl">Bem vindo ao grupo Ousar</h2>
                    <p className='text-white'>Somos um ecossistema de núcleos especializados em
                        inteligência corporativa e marketing digital</p>
                    <Link href="/quem-somos"><a className="bg-red p-4 rounded text-white w-fitt text-bold">Quem Somos</a></Link>
                </div>
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=5a84tXRpBJI' width="auto" height="300px" controls /> */}
            </div>
        </div>
    )
}