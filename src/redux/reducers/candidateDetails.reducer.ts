import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import candidateDetailsJson from "../../pages/home/__tests__/__mocks__/candidateDetails.json";

export type CandidateDetailsType = typeof candidateDetailsJson;

const initialState = { candidateDetails: candidateDetailsJson };

const CandidateDetailsState = createSlice({
  name: "candidateDetailsState",
  initialState,
  reducers: {
    setCandidateDetails: (
      state,
      action: PayloadAction<CandidateDetailsType>
    ) => {
      state.candidateDetails = action.payload;
    },
    resetCandidateDetails: () => initialState,
  },
});

export const { setCandidateDetails, resetCandidateDetails } =
  CandidateDetailsState.actions;

const candidateDetailsReducer = CandidateDetailsState.reducer;

export default candidateDetailsReducer;
