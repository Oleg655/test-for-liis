type InitialStateType = typeof initialState

const defaultDate = new Date();
const today = defaultDate.toLocaleDateString().split('.').reverse().join('-')

const initialState = {
    locationName: "Москва",
    date: today,
    days: '1',
};

export const searchReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "CHANGE_LOCATION_NAME":
            return {
                ...state,
                locationName: action.newLocationName,
            };
        case "CHANGE_COUNT_OF_DAYS":
            return {
                ...state,
                days: action.countOfDays,
            };
        case "SET_DATE":
            return {
                ...state,
                date: action.newDate,
            }
        default:
            return state
    }
}


export const changeLocation = (newLocationName: string) => {
    return {type: "CHANGE_LOCATION_NAME", newLocationName};
};
export const setDate = (newDate: string) => {
    return {type: "SET_DATE", newDate};
};
export const changeDays = (countOfDays: string) => {
    return {type: "CHANGE_COUNT_OF_DAYS", countOfDays};
};

