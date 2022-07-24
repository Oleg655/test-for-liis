import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {ResultHotel, selectHotel} from "../../../bll/hotelsListReducer";
import style from './List.module.scss'
import {Like} from "../../../assets/Like";
import {Home} from "../../../assets/Home";
import {Rating} from "../rating/Rating";


export const List = () => {

    const hotelsList = useSelector<AppStateType, ResultHotel[]>(state => state.hotels.hotelsList)
    const dispatch = useDispatch()

    return <div className={style.mainBlockForList}>
        {hotelsList.map((hotel: ResultHotel) => {
            return <div className={style.hotelForm} key={hotel.hotelId}>
                <Home className={style.home}/>
                <div className={style.hotelDescription}>
                    <span>{hotel.hotelName}</span>
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
                        {hotel.priceFrom}
                    </span>
                </div>
            </div>
        })}
    </div>
}