import React, {ChangeEvent} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeDays, changeLocation, setDate} from "../../../bll/searchHotelsReducer";
import {AppStateType} from "../../../bll/store";

export const SearchHotelForm = () => {

    const dispatch = useDispatch()
    const locationName = useSelector<AppStateType, string>(state => state.searchData.locationName)
    const countOfDays = useSelector<AppStateType, string>(state => state.searchData.days)
    const date = useSelector<AppStateType, string>(state => state.searchData.date)

    const changeLocationName = (locationName: string) => {
        return dispatch(changeLocation(locationName))
    }
    const setNewDate = (newDate: string) => {
        return dispatch(setDate(newDate))
    }
    const changeCountOfDays = (event: ChangeEvent<HTMLInputElement>) => {
        const regex = new RegExp(/^[0-9]*$/);
        let expression = event.currentTarget.value;
        if (regex.test(expression)) {
            dispatch(changeDays(expression))
        }
    }

    return <div>
        <input onChange={(event: ChangeEvent<HTMLInputElement>) => {
            return changeLocationName(event.currentTarget.value)
        }} value={locationName}/>
        <input onChange={(event: ChangeEvent<HTMLInputElement>) => {
            return setNewDate(event.currentTarget.value)
        }} value={date}
               type={'date'}/>
        <input value={countOfDays} onChange={changeCountOfDays}/>
        <button>Найти</button>
    </div>
}