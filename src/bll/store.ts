import {combineReducers, legacy_createStore as createStore} from "redux";
import {hotelsListReducer} from "./hotelsListReducer";
import {searchReducer} from "./searchHotelsReducer";


const rootReducer = combineReducers({
    hotels: hotelsListReducer,
    searchData: searchReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)