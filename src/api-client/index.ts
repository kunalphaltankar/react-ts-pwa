import axios, { AxiosError } from "axios";
import { updateLoaderStatus } from "../redux/reducers/global.reducer";
import {
  NotificationStateType,
  setNotification,
} from "../redux/reducers/notification.reducer";
import { store } from "../redux/store";

const defaultHeaders = {
  "Content-type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer `,
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.PWA_API_ENDPOINT,
  timeout: 25000,
  headers: defaultHeaders,
});

const generateStatusCodes = (codeStartsFrom: number) => {
  return Array.from({ length: 100 }, (_, i) => i + codeStartsFrom);
};

const CLIENT_ERROR_CODES = generateStatusCodes(400);
const SERVER_ERROR_CODES = generateStatusCodes(500);
const SUCCESS_CODES = generateStatusCodes(200);

/*
 INTERCEPTOR TO HANDLE API REQUEST
*/
axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      return Promise.reject(new Error("Not Authorized!"));
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const apiResponseHandler = ({ status }: { status: number }) => {
  if (
    CLIENT_ERROR_CODES.includes(status) ||
    SERVER_ERROR_CODES.includes(status)
  ) {
    return false;
  }
  if (SUCCESS_CODES.includes(status)) {
    return true;
  }
};

const showNotifcation = ({
  code,
  message,
  type,
  show,
}: NotificationStateType) => {
  store.dispatch(
    setNotification({
      code: code,
      message: message,
      type: type,
      show: show,
    })
  );
};

/*
 INTERCEPTOR TO HANDLE API RESPONSE
*/
axiosInstance.interceptors.response.use(
  (response) => {
    try {
      const { status, statusText } = response;
      const isSuccess = apiResponseHandler({ status });
      if (!isSuccess) {
        return Promise.reject({
          code: status,
          message: statusText,
          type: "error",
          show: true,
        });
      }
      return response;
    } catch (error) {
      return Promise.reject({
        code: 0,
        message: error as string,
        type: "error",
        show: true,
      });
    }
  },
  (error: AxiosError) => {
    console.log(error, error.response?.status);
    return Promise.reject({
      code: error.response?.status,
      message: error.message as string,
      type: "error",
      show: true,
    });
  }
);

type ApiOptionsType = {
  method: string;
  api: string;
  data?: unknown;
  showLoader?: boolean;
  successMessage?: string;
};

const invokeApi = async (options: ApiOptionsType) => {
  const {
    method,
    api,
    data = {},
    showLoader = true,
    successMessage = "",
  } = options;
  try {
    if (showLoader) {
      store.dispatch(updateLoaderStatus({ showLoader: true }));
    }
    const apiResponse = await axiosInstance.request({
      url: api,
      method: method,
      data: data,
    });
    if (showLoader) {
      store.dispatch(updateLoaderStatus({ showLoader: false }));
    }
    if (successMessage) {
      showNotifcation({
        message: successMessage,
        type: "success",
        show: true,
      });
    }
    return apiResponse;
  } catch (error) {
    const { code, message, type, show } = error as NotificationStateType;
    showNotifcation({
      code: code,
      message: message,
      type: type,
      show: show,
    });
    if (showLoader) {
      store.dispatch(updateLoaderStatus({ showLoader: false }));
    }
    return undefined;
  }
};

export { invokeApi };
export type { ApiOptionsType };
