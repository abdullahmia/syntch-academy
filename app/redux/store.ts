import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/api.slice";
import authSlice from "../features/auth/auth.slice";
import mediaSlice from "../features/media/media.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    media: mediaSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
