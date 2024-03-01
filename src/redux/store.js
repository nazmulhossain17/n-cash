import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice';

const userPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: [], // Add any properties you want to exclude from persistence
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
});

export const persistor = persistStore(store);