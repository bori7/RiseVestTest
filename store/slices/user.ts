import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialUserStateType,
  LoginUserRequestType,
  RegistrationResponseType,
  UserDataType,
} from "../../shared/types/slices";
import { LOGIN_URL } from "../../constants/values";
import { apiPost } from "../../hooks/apiHooks";

const initialUserState: InitialUserStateType = {
  userData: null,
  userLoading: false,
  userError: null,
  userMessage: "",
};
export const loginUser = createAsyncThunk(
  "loginuser",
  async (request: LoginUserRequestType, { rejectWithValue }) => {
    console.log("req: ", request);
    console.log("url: ", LOGIN_URL);
    try {
      const response = await apiPost(LOGIN_URL, {}, request);
      console.log("Login response: ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error while trying to sign in: ", error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialUserState,
  reducers: {
    updateUserData: (state, action: PayloadAction<UserDataType>) => {
      state.userData = action.payload;
    },
    updateUserState: (state, action: PayloadAction<InitialUserStateType>) => {
      state.userData = action.payload.userData;
      state.userError = action.payload.userError;
      state.userLoading = action.payload.userLoading;
      state.userMessage = action.payload.userMessage;
    },
    clearUserState: (state) => {
      state.userLoading = false;
      state.userError = null;
      state.userMessage = "";
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state: InitialUserStateType) => {
      state.userLoading = true;
      state.userError = null;
      state.userMessage = "";
    });
    builder.addCase(
      loginUser.fulfilled,
      (
        state: InitialUserStateType,
        action: PayloadAction<RegistrationResponseType>
      ) => {
        state.userLoading = false;
        console.log("Login Payload", action.payload);
        const respPayload = action.payload;

        state.userError = null;
        state.userMessage = `Welcome back, ${respPayload?.first_name}`;
        state.userData = {
          ...state.userData,
          token: respPayload?.token,
          id: respPayload?.id,
          email_address: respPayload?.email_address,

          first_name: respPayload?.first_name,
          last_name: respPayload?.last_name,
          username: respPayload?.username,
          total_balance: respPayload?.total_balance,
          total_returns: respPayload?.total_returns,
        };
      }
    );
    builder.addCase(
      loginUser.rejected,
      (state: InitialUserStateType, action: any) => {
        console.log("Sign in error_action", action);
        state.userLoading = false;
        state.userError = {
          code: action.error?.code || "89",
          message:
            action.payload?.message ||
            action.error?.message ||
            "Unable to Login",
        };
        state.userMessage = "";
      }
    );
  },
});

export const { updateUserData, updateUserState, clearUserState } =
  userSlice.actions;
export default userSlice.reducer;
