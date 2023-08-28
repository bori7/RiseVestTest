import { GET_PLANS, GET_PLAN_PROJECTION } from "../../constants/values";
import { getBy, getByWithPathParam, getFor } from "../../hooks/apiHooks";
import {
  GetPlanProjectionResponseType,
  GetPlansItemType,
  GetPlansResponseType,
} from "../../shared/types/queries";

export const getPlans = (
  token: string | undefined
): Promise<GetPlansResponseType> => {
  return getFor(GET_PLANS, token);
};

export const getPlan = (
  token: string | undefined,
  param: string,
  paramValue: string | number | undefined
): Promise<GetPlansItemType> => {
  return getByWithPathParam(GET_PLANS, token, param, paramValue);
};

export const getPlanProjections = (
  token: string | undefined,
  param: string | string[] | undefined,
  paramValue: string | number | string[] | undefined[] | undefined | any
): Promise<GetPlanProjectionResponseType> => {
  return getBy(GET_PLAN_PROJECTION, token, param, paramValue);
};
