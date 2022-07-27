import {all, select, takeEvery, put, call} from "redux-saga/effects";
import {hotelApi} from "../dal/api-hotels";
import {SagaIterator} from "@redux-saga/types";
import {setHotels} from "./hotelsListReducer";
import {generateDate} from "../features/features";
import axios from "axios";

const requestHotels = async (locationName: string, date: string, countOfDays: string) => {
    try {
        const response = await hotelApi.getHotel(locationName, date, generateDate(date, countOfDays))
        return response

    } catch (error) {
        if(axios.isAxiosError(error) && error.response){
           console.log(error.response.data)
        }

    }

}

export function* workSetHotelsDataSaga(): SagaIterator {
    const locationName = yield select(store => store.searchData.locationName)
    const date = yield select(store => store.searchData.date)
    const days = yield select(store => store.searchData.days)

    const response = yield call(requestHotels, locationName, date, days)
    yield put(setHotels(response.data))
}

export function* searchHotelsSagas() {
    yield all([takeEvery('GET_HOTELS', workSetHotelsDataSaga)])
}