import { removeLocalStorage, setLocalStorage } from "../utils/localStorage";
import { baseApiHandler } from "./axios";

export const surveyResultHandler = async () => {
  try {
    const url = "surveys-result";

    const res = await baseApiHandler("get", url, null, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    unAuthorizedErrorHandler(err);

    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const totalSurveyHandler = async () => {
  try {
    const url = "surveys";

    const res = await baseApiHandler("get", url, null, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    unAuthorizedErrorHandler(err);

    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const singleSurveyHandler = async (id: number | string) => {
  try {
    const url = `surveys/${id}`;

    const res = await baseApiHandler("get", url, null, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    unAuthorizedErrorHandler(err);

    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const loginHandler = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const url = "login";

    const res = await baseApiHandler("post", url, data, false);

    if (res?.data?.access) {
      setLocalStorage("access_token", res.data.access);
    }

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const surveySubmitHandler = async (data: {
  id: number | string;
  response: string;
  description: string;
}) => {
  try {
    const url = `survey/${data.id}/response`;

    const res = await baseApiHandler("post", url, data, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    unAuthorizedErrorHandler(err);

    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const surveyResponseHandler = async (
  id: number | string,
  response_type: string
) => {
  try {
    const url = `surveys-responses/${id}?response_type=${response_type}`;

    const res = await baseApiHandler("get", url, null, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    unAuthorizedErrorHandler(err);

    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const surveyNotParticipateHandler = async (id: number | string) => {
  try {
    const url = `users-list/${id}`;

    const res = await baseApiHandler("get", url, null, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    unAuthorizedErrorHandler(err);

    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const agendaListHandler = async (id: number | string) => {
  try {
    const url = `meetings/${id}`;

    const res = await baseApiHandler("get", url, null, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    unAuthorizedErrorHandler(err);

    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

export const meetingListHandler = async () => {
  try {
    const url = `meetings`;

    const res = await baseApiHandler("get", url, null, true);

    return {
      message: "Success",
      data: res.data,
      error: null,
    };
  } catch (err: any) {
    unAuthorizedErrorHandler(err);

    return {
      message: "Failed",
      data: null,
      error: err,
    };
  }
};

const unAuthorizedErrorHandler = (err: any) => {
  if (err?.response?.status === 401) {
    removeLocalStorage("access_token");

    window.location.href = "/login";
  }
};
