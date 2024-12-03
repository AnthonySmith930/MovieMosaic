import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice.ts'
import Reactotron from '../../../ReactotronConfig'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    enhancers: (getDefaultEnhancers) => {
        const reactotronEnhancer = __DEV__ ? [Reactotron.createEnhancer!()] : []
        return getDefaultEnhancers().concat(reactotronEnhancer)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
