import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {deleteHotelFromSelectedList, ResultHotel, sortByPrice, sortByRating} from "../../../bll/hotelsListReducer";
import style from './SelectedHotelsForm.module.scss'
import {Like} from "../../../assets/Like";
import {Rating} from "../rating/Rating";
import {generateMonth} from "../../../features/features";


export const SelectedHotelsForm = () => {

    const selectedListHotels = useSelector<AppStateType, ResultHotel[]>(state => state.hotels.selectedListHotels)
    const date = useSelector<AppStateType, string>(state => state.searchData.date)
    const months = useSelector<AppStateType, string[]>(state => state.searchData.months)
    const dispatch = useDispatch()

    const sortForRating = () => {
        dispatch(sortByRating())
    }
    const sortForPrice = () => {
        dispatch(sortByPrice())
    }

    return <div className={style.mainBlock}>
        <h1 className={style.title}>Избранное</h1>
        <div>
            <input onClick={sortForRating} className={style.input} value={'Рейтинг'}/>
            <input onClick={sortForPrice} className={style.input} value={'Цена'}/>
        </div>

        <div className={style.listBlock}>
            {selectedListHotels.map((hotel: ResultHotel) => {
                return <div className={style.hotelForm} key={hotel.hotelId}>
                    <div className={style.hotelDescription}>
                        <span>{hotel.hotelName}</span>
                        <span>{generateMonth(date,months)}</span>
                        <Rating stars={hotel.stars}/>
                    </div>
                    <div className={style.price}>
                        Price:
                    </div>
                    <div className={style.likeBlock}>
                        <Like onClick={() => {
                            return dispatch(deleteHotelFromSelectedList(hotel))
                        }
                        } className={style.like}/>
                        <span>{hotel.priceFrom}₽</span>
                    </div>


                </div>
            })}
        </div>


    </div>
}