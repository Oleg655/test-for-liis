import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import style from './Images.module.scss'

export const Images = () => {

    const images = useSelector<AppStateType, string[]>(state => state.hotels.images)

    return <div className={style.swiperBlock}>
        <Swiper slidesPerView={3.3}>
            {images.map((image) => {
                return (
                    <SwiperSlide>
                        <img src={image}/>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
}