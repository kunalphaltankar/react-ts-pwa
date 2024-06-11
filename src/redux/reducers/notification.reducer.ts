import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface NotificationStateType {
  code?: number;
  message: string;
  type: "info" | "error" | "success";
  show: boolean;
}

const initialState: NotificationStateType = {
  code: 0,
  message: "",
  type: "info",
  show: false,
};

const NotificationState = createSlice({
  name: "notificationState",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationStateType>) => {
      const { code, message, type, show } = action.payload;
      state.code = code;
      state.message = message;
      state.type = type;
      state.show = show;
    },
    resetNotification: () => initialState,
  },
});

export const { setNotification, resetNotification } = NotificationState.actions;

const notificationReducer = NotificationState.reducer;

export default notificationReducer;
