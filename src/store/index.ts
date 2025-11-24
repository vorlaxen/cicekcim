import { configureStore } from "@reduxjs/toolkit";
import { Runtime } from "@/config/environmentConfig";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { mainReducer } from "./slices/mainSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: Runtime.environment === 'development' ? true : false
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;