import { AxiosRequestHeaders } from "axios";
import { apiCallInit } from "../shared/helper";
import { useState, useEffect } from "react";

export const apiPost = async (
  url: string,
  headers: any,
  requestPayload: any
) => {
  return await apiCallInit(headers)
    .post(url, requestPayload)
    .then((res) => {
      const newRes = { ...res };
      return newRes;
    });
};

export const apiGetBy = (
  url: any,
  headers: AxiosRequestHeaders | undefined | {},
  param: any,
  paramValue: any
) =>
  apiCallInit(headers)
    .get(`${url}?${param}=${paramValue}`)
    .then((res) => {
      const newRes = { ...res };
      return newRes;
    });

export const apiGetFor = (
  url: any,
  headers: AxiosRequestHeaders | undefined | {}
) =>
  apiCallInit(headers)
    .get(`${url}`)
    .then((res) => {
      const newRes = { ...res };
      return newRes;
    });

export const useGetForApiCall = ({ url, headers, deps = [] as [] }: any) => {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string; code: string } | null>(
    null
  );

  useEffect(() => {
    const call = async () => {
      setLoading(true);
      await apiGetFor(url, headers)
        .then((res) => {
          setLoading(false);
          if (res.data?.responseCode !== "000") {
            setError({
              code: res.data?.responseCode,
              message: res.data?.message,
            });
          } else {
            setData(res.data);
            setError(null);
          }
        })
        .catch((err) => {
          console.error(err);
          let errData = err?.response?.data;
          console.error(
            errData?.message || err.message,
            "via USE GET API HOOKS"
          );
          setError({
            message: errData?.message || err.message || "Failed Verification",
            code: errData?.responseCode || err?.code || "86",
          });
          setLoading(false);
        });
    };
    call();
  }, [...deps]);

  return [data, loading, error];
};
