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

export const messageListHandler = async (id: number | string) => {
  try {
    const url = `messages/${id}`;

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

export const groupMessageListHandler = async (id: number | string) => {
  try {
    const url = `messages/${id}`;

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

    if (res?.data?.accessToken) {
      setLocalStorage("access_token", res.data.accessToken);
      setLocalStorage("user_id", res.data.userId);
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

export const signUpHandler = async (data: {
  userName: string;
  email: string;
  password: string;
}) => {
  try {
    const url = "signup";

    const res = await baseApiHandler("post", url, data, false);

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

export const sendFriendRequestHandler = async (id: string | number) => {
  try {
    const url = "send-friendrequest";

    const res = await baseApiHandler("post", url, { userId: id }, true);

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

export const friendRequestActionHandler = async (
  id: string | number,
  isAccept: boolean
) => {
  try {
    const url = "accept-friendrequest";

    const res = await baseApiHandler(
      "post",
      url,
      { requesterId: id, isAccept: isAccept },
      true
    );

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

export const logoutHandler = () => {
  removeLocalStorage("access_token");

  window.location.href = "/sign-in";
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

export const groupListHandler = async () => {
  try {
    const url = `groups`;

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

export const groupCreateHandler = async (data: {
  groupName: string;
  userList: string[];
}) => {
  try {
    const url = "create-group";

    const res = await baseApiHandler(
      "post",
      url,
      { groupName: data.groupName, members: data.userList },
      true
    );

    if (res?.data?.accessToken) {
      setLocalStorage("access_token", res.data.accessToken);
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

export const userListHandler = async () => {
  try {
    const url = `users`;

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

export const chatListHandler = async () => {
  try {
    const url = `friend-list`;

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
