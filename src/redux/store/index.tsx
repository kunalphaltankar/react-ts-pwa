import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../reducers/global.reducer";
import notificationReducer from "../reducers/notification.reducer";

export const store = configureStore({
  reducer: {
    globalState: globalReducer,
    notificationState: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
