import { Swiper, SwiperProps } from "swiper/react"
import { ReactNode } from "react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'


type SliderProps = {
    settings: SwiperProps,
    children: ReactNode
}

export const Slider = ({ settings, children }: SliderProps) => {
    return (
        <Swiper {...settings} modules={[Navigation, Pagination, A11y, Autoplay]}>
            {children}
        </Swiper>
    )
}