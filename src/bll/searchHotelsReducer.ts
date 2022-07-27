import {generateToday} from "../features/features";
type InitialStateType = typeof initialState

const defaultDate = new Date();
const hi = defaultDate.toLocaleDateString().split('.').reverse().join('-')



const today = generateToday(defaultDate)


const initialState = {

    locationName: "Москва",
    date: today,
    days: '1',
    months: [
        'января',
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "ноября",
        "декабря"
    ]
};

export const searchReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
            debugger
            return {
                ...state,
                date: action.newDate,
            }

        default:
            return state
    }
}

export const changeLocation = (newLocationName: string) => {
    return {type: "CHANGE_LOCATION_NAME", newLocationName} as const
};
export const setDate = (newDate: string) => {
    debugger
    return {type: "SET_DATE", newDate} as const
};
export const changeDays = (countOfDays: string) => {
    return {type: "CHANGE_COUNT_OF_DAYS", countOfDays} as const
};

type ActionsType =
    | ReturnType<typeof changeLocation>
    | ReturnType<typeof setDate>
    | ReturnType<typeof changeDays>


