export interface GetPlansResponseType {
  item_count: string;
  items: GetPlansItemType[];
}

export interface GetPlansItemType {
  id?: string;
  created_at?: string;
  plan_name?: string;

  invested_amount?: string;
  total_returns?: string;
  target_amount?: string;

  maturity_date?: string;
  user_id?: string;

  returns?: [];
}

export interface GetRatesResponseType {
  buy_rate: string;
  sell_rate: string;
}

export interface GetQuotesResponseType {
  quote: string;
  author: string;
}

export interface GetPlanProjectionResponseType {
  total_invested: string;
  total_returns: string;
}
