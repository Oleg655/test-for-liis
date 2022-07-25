import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import {hotelsListReducer} from "./hotelsListReducer";
import { searchReducer} from "./searchHotelsReducer";
import { all, fork } from 'redux-saga/effects'
import {searchHotelsSagas} from "./searchHotelSagas";
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    hotels: hotelsListReducer,
    searchData: searchReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
const rootSaga = function* rootSaga() { // запускает watcher
    yield all([
        fork(searchHotelsSagas)
    ])
}


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)