import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialPlanStateType, PlanDataType } from "../../shared/types/slices";

const initialPlanState: InitialPlanStateType = {
  planData: null,
  planLoading: false,
  planError: null,
  planMessage: "",
};
export const planSlice = createSlice({
  name: "planSlice",
  initialState: initialPlanState,
  reducers: {
    updatePlanData: (state, action: PayloadAction<PlanDataType>) => {
      state.planData = action.payload;
    },
    updatePlanState: (state, action: PayloadAction<InitialPlanStateType>) => {
      state.planData = action.payload.planData;
      state.planError = action.payload.planError;
      state.planLoading = action.payload.planLoading;
      state.planMessage = action.payload.planMessage;
    },
    clearPlanState: (state) => {
      state.planLoading = false;
      state.planError = null;
      state.planMessage = "";
      state.planData = null;
    },
  },
});

export const { updatePlanData, updatePlanState, clearPlanState } =
  planSlice.actions;
export default planSlice.reducer;
