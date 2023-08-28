export interface InitialUserStateType {
  userData: UserDataType | null;
  userLoading: boolean;
  userError: InitialUserErrorType | null;
  userMessage: string;
}

export interface InitialUserErrorType {
  message?: string;
  code?: string;
}

export interface UserDataType {
  id?: string;
  email_address?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  total_balance?: string;
  total_returns?: string;
  token?: string;
  created_at?: string;
  phone_number?: string;
  date_of_birth?: string;
  password?: string;
}

export interface InitialPlanStateType {
  planData: PlanDataType | null;
  planLoading: boolean;
  planError: InitialPlanErrorType | null;
  planMessage: string;
}

export interface InitialPlanErrorType {
  message?: string;
  code?: string;
}

export interface PlanDataType {
  id?: string;
  created_at?: string;
  plan_name?: string;
  invested_amount?: string;
  total_returns?: string;
  target_amount?: string;

  maturity_date?: string;
  user_id?: string;
  returns?: string[];
}

export interface LoginUserRequestType {
  email_address: string;
  password: string;
}

export interface RegistrationResponseType {
  token?: string;
  id?: string;
  email_address?: string;

  first_name?: string;
  last_name?: string;
  username?: string;

  total_balance?: string;
  total_returns?: string;
}

export interface SignUpUserRequestType {
  first_name: string;
  last_name: string;

  email_address: string;
  password: string;
  phone_number: string;
  date_of_birth: string;
}

export interface SignUpResponseType {
  id?: string;
  created_at?: string;
  email_address?: string;

  first_name?: string;
  last_name?: string;
  username?: string;

  phone_number?: string;
  date_of_birth?: string;
}

export interface CreatePlanRequestType {
  plan_name: string;
  target_amount: string;
  maturity_date: string;
  token?: string;
}

export interface CreatePlanResponseType {
  id?: string;
  created_at?: string;
  plan_name?: string;
  invested_amount?: string;
  total_returns?: string;
  target_amount?: string;

  maturity_date?: string;
  user_id?: string;
  returns?: string[];
}
