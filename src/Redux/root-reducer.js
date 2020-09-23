import { combineReducers } from 'redux'

import getDataReducer from './getData/album-reducer';
import trackReducer from './track/track-reducer'
import favouritesReducer from './favourites/favourites.reducer';
import { persistReducer } from 'redux-persist'
import storage  from 'redux-persist/lib/storage'

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['currentTrackArray' ,'favouriteArray']
}

const rootReducer = combineReducers({
    getData : getDataReducer,
    currentTrackArray :  trackReducer,
    favouriteArray : favouritesReducer
})

export default persistReducer(persistConfig, rootReducer)
