// export const BASE_URL = "http://192.168.8.101:8080";
// export const BASE_URL = "http://192.168.209.198:8080";
// export const BASE_URL = "https://192.168.41.165:7505/face-verification-service";
export const BASE_URL = "http://192.168.41.165:7005/face-verification-service";
// export const BASE_URL = "https://mule.ecobank.com/face-verification-service";

export const VERIFY_FACE_URL = `${BASE_URL}/verify/face`;
export const VERIFY_FACES_URL = `${BASE_URL}/verify/faces`;
export const INITIATE_WORKFLOW_URL = `${BASE_URL}/initiate/{affiliateCode}/{msisdn}`;
export const ACQUIRED_WORKFLOW_URL = `${BASE_URL}/acquired/{affiliateCode}/{msisdn}/{workflowId}`;
export const SIMILARITY_WORKFLOW_URL = `${BASE_URL}/similarity/{msisdn}/{similarityAccountId}/{similarityWorkflowId}/{livelinessWorkflowId}`;

export const WEBHREF_TEST =
  "https://ecobank.web.emea-1.jumio.ai/web/v4/app?authorizationToken=eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAA_5XOTQrCQAwF4LvM2sAknb-4E3FRQQTbHiAzTU4gKIh3d9obuH187_E-Tt-npzs6TDkjEscYPLmDk9bGtefCbU1ZBzBjhNBCg4IqUMirWK3Vkmx8x1FI2RcBpqgQOAdgrwSZWNiwoqSh45fpP7w91Lo-L9N8XW7jfb5MM275PuIH6Q_J934iCDkosHEEiXVILFh8P_j9Afp30yjoAAAA.hjDOrv2vIXmjiyBlowk3zc3SU9ZX2J5ttdfQzIrIL642TUmzqG-c4nJvbFlh4jTsIwxU73uGxDkeDfU4Ckyucg&locale=en-US";

export const JUMIO_BASIC =
  "YWI4YTZkNzUtZjIzZC00MmY2LTgwNzItZGY4NDcwNWZlNzJhOlNBbkh3eExFOGZNNXhDQ0RkVmN3b0h1YUVaaGZzaUpj";
