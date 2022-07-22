import {generateDate} from "./features";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://engine.hotellook.com/api/v2/lookup.json'
})

export const hotelApi = {
    getHotel(location: string, dataIn: string, dateOut: string) {
        return instance
            .get(`location=${location}&currency=rub&checkIn=${dataIn}&checkOut=${generateDate(dataIn, dateOut)}&limit=8`)
    }
}