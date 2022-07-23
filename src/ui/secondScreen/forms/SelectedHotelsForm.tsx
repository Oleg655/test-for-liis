import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {deleteHotelFromSelectedList, ResultHotel} from "../../../bll/hotelsListReducer";
import style from './SelectedHotelsForm.module.scss'

export const SelectedHotelsForm = () => {
    const selectedListHotels = useSelector<AppStateType, ResultHotel[]>(state => state.hotels.selectedListHotels)
    console.log(selectedListHotels)
    const dispatch = useDispatch()

    return <div className={style.mainBlock}>
        <h1>Избранное</h1>
        <input value={'Рейтинг'}/>
        <input value={'Цена'}/>
        <div className={style.listBlock}>
            {selectedListHotels.map((hotel: ResultHotel) => {
                return <div key={hotel.hotelId}>
                <span onClick={() => {
                    debugger
                    return dispatch(deleteHotelFromSelectedList(hotel))
                }
                }>{hotel.hotelName}</span>
                    <span>{hotel.stars}</span>
                    <span>{hotel.priceFrom}</span>
                </div>
            })}
        </div>


    </div>
}