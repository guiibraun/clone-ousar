import { SwiperProps, SwiperSlide } from "swiper/react"
import { Slider } from "../../Slider/Slider"
import { clientesUtils } from "../../../utils/ClientesUtils"
import Image from "next/image"

const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 6,
    lazy: true,
    navigation: true,
}




export const Clientes = () => {
    return (
        <div className="min-h-full h-52 bg-black text-white flex items-center">
            <div className='container'>
                <Slider settings={settings}>
                    {clientesUtils.map((item, index) => (
                        <Image src={item.image} key={index}/>
                    ))}
                </Slider>
            </div>
        </div>
    )
}