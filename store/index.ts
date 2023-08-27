import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./slices/user";
import planReducer from "./slices/plan";

const rootReducer = {
  user: userReducer,
  plan: planReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
