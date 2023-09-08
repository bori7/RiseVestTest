import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialUserStateType,
  LoginUserRequestType,
  RegistrationResponseType,
  SignUpResponseType,
  SignUpUserRequestType,
  UserDataType,
} from "../../shared/types/slices";
import {
  IS_RISE_USER_KEY,
  LOGIN_URL,
  SIGNUP_URL,
} from "../../constants/values";
import { apiPost } from "../../hooks/apiHooks";
import { secureSave } from "../../shared/helper";

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

export const signupUser = createAsyncThunk(
  "signupuser",
  async (request: SignUpUserRequestType, { rejectWithValue }) => {
    console.log("req: ", request);
    console.log("url: ", SIGNUP_URL);
    try {
      const response = await apiPost(SIGNUP_URL, {}, request);
      console.log("Sign Up response: ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error while trying to sign up: ", error);
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

        secureSave(IS_RISE_USER_KEY, IS_RISE_USER_KEY);
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
            // action.error?.message ||
            "Unable to log you in at the moment",
        };
        state.userMessage = "";
      }
    );

    builder.addCase(signupUser.pending, (state: InitialUserStateType) => {
      state.userLoading = true;
      state.userError = null;
      state.userMessage = "";
    });
    builder.addCase(
      signupUser.fulfilled,
      (
        state: InitialUserStateType,
        action: PayloadAction<SignUpResponseType>
      ) => {
        state.userLoading = false;
        console.log("Sign up Payload", action.payload);
        const respPayload = action.payload;

        state.userError = null;
        state.userMessage = `Welcome , ${respPayload?.first_name}`;
        // state.userMessage = ``;
        state.userData = {
          ...state.userData,
          id: respPayload?.id,
          email_address: respPayload?.email_address,

          first_name: respPayload?.first_name,
          last_name: respPayload?.last_name,
          username: respPayload?.username,
          created_at: respPayload?.created_at,
          phone_number: respPayload?.phone_number,

          date_of_birth: respPayload?.date_of_birth?.substring(0, 10),
        };
        secureSave(IS_RISE_USER_KEY, IS_RISE_USER_KEY);
      }
    );
    builder.addCase(
      signupUser.rejected,
      (state: InitialUserStateType, action: any) => {
        console.log("Sign up error_action", action);
        state.userLoading = false;
        state.userError = {
          code: action.error?.code || "89",
          message:
            action.payload?.message ||
            // action.error?.message ||
            "Unable to sign you up at the moment",
        };
        state.userMessage = "";
      }
    );
  },
});

export const { updateUserData, updateUserState, clearUserState } =
  userSlice.actions;
export default userSlice.reducer;
