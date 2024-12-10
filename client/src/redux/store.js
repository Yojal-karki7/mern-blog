import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './User/userSlice'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'
import themeReducers from './theme/themeSlice'

const rootReducer = combineReducers({
    user: userReducer,
    theme:themeReducers,
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const presistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: presistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
}),
});

export const persistor = persistStore(store)