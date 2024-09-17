import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'

import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import {thunk} from 'redux-thunk';
import RootReducer from './RootReducer';

const persistConfig = {
	key: 'root',
	storage: storageSession,
};

const appReducer = (state, action) => {
	if (action.type === 'SIGNOUT') {
		// for all keys defined in your persistConfig(s)
		storageSession.removeItem('persist:root');
		return RootReducer(undefined, action);
	}
	return RootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) => {
		// WARNING: this means that _none_ of the default middleware are added!
		return [thunk]
	  },
});
export const persistor = persistStore(store);