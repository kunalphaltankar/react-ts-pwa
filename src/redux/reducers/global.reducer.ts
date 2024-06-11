import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderStateType {
  visible: boolean;
  title: string;
}
interface GlobalStateType {
  header: HeaderStateType;
  isOffline: boolean;
  isLoggedIn: boolean;
  showLoader: boolean;
}

const initialState: GlobalStateType = {
  header: { visible: false, title: "PWA Boilerplate" },
  isOffline: false,
  isLoggedIn: false,
  showLoader: false,
};

const GlobalState = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    updateHeaderVisiblity: (
      state,
      action: PayloadAction<Pick<HeaderStateType, "visible">>
    ) => {
      state.header.visible = action.payload.visible;
    },
    updateHeaderTitle: (
      state,
      action: PayloadAction<Pick<HeaderStateType, "title">>
    ) => {
      state.header.title = action.payload.title;
    },
    updateNetworkStatus: (
      state,
      action: PayloadAction<Pick<GlobalStateType, "isOffline">>
    ) => {
      state.isOffline = action.payload.isOffline;
    },
    updateLoggedStatus: (
      state,
      action: PayloadAction<Pick<GlobalStateType, "isLoggedIn">>
    ) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    updateLoaderStatus: (
      state,
      action: PayloadAction<Pick<GlobalStateType, "showLoader">>
    ) => {
      state.showLoader = action.payload.showLoader;
    },
  },
});

export const {
  updateHeaderVisiblity,
  updateHeaderTitle,
  updateNetworkStatus,
  updateLoggedStatus,
  updateLoaderStatus,
} = GlobalState.actions;

const globalReducer = GlobalState.reducer;

export default globalReducer;
