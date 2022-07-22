import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {deleteHotelFromSelectedList, ResultHotel} from "../../../bll/hotelsListReducer";

export const SelectedHotelsForm = () => {
    const selectedListHotels = useSelector<AppStateType, ResultHotel[]>(state => state.hotels.selectedListHotels)
    const dispatch = useDispatch()

    return <div>

        <input value={'Рейтинг'}/>
        <input value={'Цена'}/>

        {selectedListHotels.map((hotel: ResultHotel) => {
            return <div key={hotel.hotelId}>
                <span onClick={()=>{
                return dispatch(deleteHotelFromSelectedList(hotel))
                }
                }>{hotel.hotelName}</span>
                <span>{hotel.stars}</span>
                <span>{hotel.priceFrom}</span>
            </div>
        })}

    </div>
}