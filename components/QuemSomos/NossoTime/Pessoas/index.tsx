import { TimeOusar } from '../../../../utils/TimesUtils'
import Image from "next/image"
import styles from '../../../../styles/Time.module.css'

export const Pessoas = () => {
    return (
        <div className="py-16 bg-black">
            <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                {TimeOusar.map((item, index) => (
                    <div key={index} className={`${styles.timeContainer}`}>
                        <Image src={item.image} height={362} width={261}  alt=''/>
                        <div className={`${styles.timeInfo}`}>
                            <h2>{item.nome}</h2>
                            <h4>{item.cargo}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}