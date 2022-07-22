import axios from "axios";

const instance = axios.create({
    baseURL: 'https://engine.hotellook.com/api/v2'
})

export const hotelApi = {
    getHotel(location: string, dataIn: string, dateOut: string) {
        return instance
        .get(`cache.json?location=${location}&currency=rub&checkIn=${dataIn}&checkOut=${dateOut}&limit=10`)
    }
}