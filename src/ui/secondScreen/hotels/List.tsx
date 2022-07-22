import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/store";
import {ResultHotel, selectHotel} from "../../../bll/hotelsListReducer";


export const List = () => {

    const hotelsList = useSelector<AppStateType, ResultHotel[]>(state => state.hotels.hotelsList)
    const dispatch = useDispatch()

    return <div>
        {hotelsList.map((hotel: ResultHotel) => {
            return <div key={hotel.hotelId}>
                <span onClick={()=>{
                    debugger
                return dispatch(selectHotel(hotel))
                }
                }>{hotel.hotelName}</span>
                <span>{hotel.stars}</span>
                <span>{hotel.priceFrom}</span>
            </div>
        })}
    </div>
}