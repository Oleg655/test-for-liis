type Hotel = {
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

type initialStateType = typeof initialState

let initialState = {
    hotels: [] as Hotel[] | []
}

export const hotelsListReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        default:
            return state
    }
}