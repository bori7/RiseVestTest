import { GET_QUOTES, GET_RATES } from "../../constants/values";
import { getFor } from "../../hooks/apiHooks";
import {
  GetQuotesResponseType,
  GetRatesResponseType,
} from "../../shared/types/queries";

export const getRates = (
  token: string | undefined
): Promise<GetRatesResponseType> => {
  return getFor(GET_RATES, token);
};

export const getQuotes = (
  token: string | undefined
): Promise<GetQuotesResponseType> => {
  return getFor(GET_QUOTES, token);
};
