import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from '../reducers/rootReducer'

export const store = configureStore({
    reducer: RootReducer
})

export type appDispatch = typeof store.dispatch