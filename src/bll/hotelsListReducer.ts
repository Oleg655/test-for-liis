export type Hotel = {
    hotelId: number
    hotelName: string
    priceFrom: number,
    locationId: number,
    stars: number,
    pricePercentile: {
        50: number,
        10: number,
        75: number,
        99: number,
        35: number,
        3: number
    },
    location: {
        state: null,
        country: string,
        name: string,
        geo: {
            lat: number,
            lon: number
        },
        priceAvg: number,
        hotelId: number
    }
}

export type ResultHotel = {
    hotelName: string,
    priceFrom: number,
    stars: number,
    hotelId: number,
    city: string
}

type initialStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof setHotels>
    | ReturnType<typeof selectHotel>
    | ReturnType<typeof deleteHotelFromSelectedList>

let initialState = {
    hotelsList: [] as ResultHotel[] | [],
    selectedListHotels: [] as ResultHotel[] | []
}

export const hotelsListReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SET_HOTELS':
            return {
                ...state,
                hotelsList: action.hotels.reduce((resultList: ResultHotel[], hotel: Hotel) => {
                    resultList.push({
                        hotelId: hotel.hotelId,
                        hotelName: hotel.hotelName,
                        priceFrom: hotel.priceFrom,
                        stars: hotel.stars,
                        city: hotel.location.name

                    })
                    return resultList
                }, [])
            }
        case "SELECT_HOTEL":
            debugger
            return {
                ...state,
                selectedListHotels: [{...action.selectedHotel}, ...state.selectedListHotels]
            }
        case "DELETE_HOTEL_FROM_SELECTED_LIST":
            return {
                ...state,
                selectedListHotels: state.selectedListHotels.filter((hotel: ResultHotel) => {
                    return hotel.hotelId !== action.selectedHotel.hotelId
                })

            }
        default:
            return state
    }
}

export const setHotels = (hotels: Hotel[]) => {
    return {type: 'SET_HOTELS', hotels} as const
}
export const selectHotel = (selectedHotel: ResultHotel) => {
    debugger
    return {type: 'SELECT_HOTEL', selectedHotel} as const
}
export const deleteHotelFromSelectedList = (selectedHotel: ResultHotel) => {
    return {type: 'DELETE_HOTEL_FROM_SELECTED_LIST', selectedHotel} as const
}

