import { TimeOusar } from '../../../../utils/TimesUtils'
import Image from "next/image"
import styles from '../../../../styles/TimeOusar.module.css'

export const Pessoas = () => {
    return (
        <div className="pb-8 lg:py-16 bg-black">
            <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 max-w-screen-lg">
                {TimeOusar.map((item, index) => (
                    <div key={index} className={`${styles.timeContainer}`}>
                        <div className="opacity-0 bg-black w-full h-full absolute z-40 hover:opacity-60 backdrop-blur-md backdrop-brightness-150"></div>
                        <Image src={item.image} height={362} width={261}  alt=''/>
                        <div className={`${styles.timeInfo} break-all`}>
                            <h2 className="text-3xl">{item.nome}</h2>
                            <h4>{item.cargo}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}