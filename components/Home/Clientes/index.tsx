import { SwiperProps, SwiperSlide } from "swiper/react"
import { Slider } from "../../Slider/Slider"
import { clientesUtils } from "../../../utils/ClientesUtils"
import Image from "next/image"
import styles from '../../../styles/Clientes.module.css'

const settings: SwiperProps = {
    spaceBetween: 50,
    autoplay: {
        delay: 200,
    },
    grabCursor: true,
    draggable: true,
    lazy: true,
    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 4,
        },
        1025: {
            slidesPerView: 6,
        }
    }
}


export const Clientes = () => {
    return (
        <div className="min-h-full h-52 bg-black text-white flex items-center">
            <div className={`container ${styles.swiperClientes}`}>
                <Slider settings={settings}>
                    {clientesUtils.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image src={item.image} alt=''/>
                        </SwiperSlide>
                    ))}
                </Slider>
            </div>
        </div>
    )
}