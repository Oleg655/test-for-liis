import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {ResultHotel, selectHotel} from "../../../bll/hotelsListReducer";
import style from './List.module.scss'
import {Like} from "../../../assets/Like";
import {Home} from "../../../assets/Home";
import {Rating} from "../rating/Rating";
import {generateMonth} from "../../../features/features";


export const List = () => {

    const hotelsList = useSelector<AppStateType, ResultHotel[]>(state => state.hotels.hotelsList)
    const dispatch = useDispatch()
    const date = useSelector<AppStateType, string>(state => state.searchData.date)
    const months = useSelector<AppStateType, string[]>(state => state.searchData.months)

    return <div className={style.mainBlockForList}>
        {hotelsList.map((hotel: ResultHotel) => {
            return <div className={style.hotelForm} key={hotel.hotelId}>

                <div className={style.blockForHome}>
                    <Home className={style.home}/>
                </div>

                <div className={style.hotelDescription}>
                    <span>{hotel.hotelName}</span>
                    <span>{generateMonth(date,months)}</span>
                    <Rating stars={hotel.stars}/>
                </div>
                <div className={style.priceBlock}>
                    Price:
                </div>
                <div className={style.likeBlock}>
                    <Like className={style.heart} onClick={() => {
                        return dispatch(selectHotel(hotel))
                    }}
                    />

                    <span>
                        {hotel.priceFrom}₽
                    </span>
                </div>
            </div>
        })}
    </div>
}