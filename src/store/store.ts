import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from './slices/auth/auth.slice';

export const rootReducer = combineReducers({
    login: loginSlice
})

export const setupStore = (initialState?: Object) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];