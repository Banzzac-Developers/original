import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const handleReqFulfilled = async (config: InternalAxiosRequestConfig) => {
  // authentication

  return config;
};

const handleReqError = (err: unknown) => {
  return Promise.reject(err);
};

const handleResFulfilled = (res: AxiosResponse) => {
  // if (import.meta.env.VITE_NODE_ENV === "mocking") {
  //   LogUtil.log(
  //     res.config.logColorIdx,
  //     `Finished [${res.config.method}] : `,
  //     res.config.url,
  //   );
  //   LogUtil.log(res.config.logColorIdx, `Response data :`, res.data);
  // }
  return res.data;
};

const handleResError = (err: unknown) => {
  // console.error(err.response);
  // 401

  return Promise.reject(err);
};

axiosInstance.interceptors.request.use(handleReqFulfilled, handleReqError);
axiosInstance.interceptors.response.use(handleResFulfilled, handleResError);

export default axiosInstance;
