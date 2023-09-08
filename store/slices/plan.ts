import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CreatePlanRequestType,
  CreatePlanResponseType,
  InitialPlanStateType,
  PlanDataType,
} from "../../shared/types/slices";
import { CREATE_PLAN } from "../../constants/values";
import { apiPost } from "../../hooks/apiHooks";

const initialPlanState: InitialPlanStateType = {
  planData: null,
  planLoading: false,
  planError: null,
  planMessage: "",
};

export const createPlan = createAsyncThunk(
  "createplan",
  async (request: CreatePlanRequestType, { rejectWithValue }) => {
    console.log("req: ", request);
    console.log("url: ", CREATE_PLAN);
    let token = request.token;
    delete request.token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await apiPost(CREATE_PLAN, headers, request);
      console.log("Create plan response: ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error while trying to create plan: ", error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(createPlan.pending, (state: InitialPlanStateType) => {
      state.planLoading = true;
      state.planError = null;
      state.planMessage = "";
    });
    builder.addCase(
      createPlan.fulfilled,
      (
        state: InitialPlanStateType,
        action: PayloadAction<CreatePlanResponseType>
      ) => {
        state.planLoading = false;
        console.log("Create Plan Payload", action.payload);
        const respPayload = action.payload;

        state.planError = null;
        state.planMessage = `${respPayload?.plan_name} Plan Created!!!`;
        state.planData = {
          ...state.planData,
          id: respPayload?.id,
          created_at: respPayload?.created_at,

          plan_name: respPayload?.plan_name,
          invested_amount: respPayload?.invested_amount,
          total_returns: respPayload?.total_returns,
          target_amount: respPayload?.target_amount,
          maturity_date: respPayload?.maturity_date,

          user_id: respPayload?.maturity_date,
          returns: respPayload?.returns,
        };
      }
    );
    builder.addCase(
      createPlan.rejected,
      (state: InitialPlanStateType, action: any) => {
        console.log("Create plan error_action", action);
        state.planLoading = false;
        state.planError = {
          code: action.error?.code || "89",
          message:
            action.payload?.message ||
            // action.error?.message ||
            "Unable to create plan at the moment",
        };
        state.planMessage = "";
      }
    );
  },
});

export const { updatePlanData, updatePlanState, clearPlanState } =
  planSlice.actions;
export default planSlice.reducer;
