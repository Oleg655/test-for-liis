import axios, {AxiosResponse} from "axios";
import {Hotel} from "../bll/hotelsListReducer";

const instance = axios.create({
    baseURL: 'https://engine.hotellook.com/api/v2'
})

export const hotelApi = {
    getHotel(location: string, dateIn: string, dateOut: string) {
        return instance
        .get<AxiosResponse,Hotel[]>(`cache.json?location=${location}&currency=rub&checkIn=${dateIn}&checkOut=${dateOut}&limit=10`)
    }
}