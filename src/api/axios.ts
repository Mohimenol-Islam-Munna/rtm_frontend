import axios from "axios";
import { getLocalStorage } from "../utils/localStorage";

const configHandler = (
  method: string,
  url: string,
  data: { [key: string]: any } | null = null,
  isAuthenticated: boolean = true
) => {
  const token = getLocalStorage("access_token");

  const baseUrl = import.meta.env.VITE_BASE_URL;

  if (method.toLowerCase() === "get" || method.toLowerCase() === "delete") {
    return {
      method: method,
      url: `${baseUrl}/${url}`,
      headers: {
        "Content-type": "application/json",
        Authorization: isAuthenticated ? `Bearer ${token}` : null,
      },
    };
  } else {
    return {
      method: method,
      url: `${baseUrl}/${url}`,
      data: data ? { ...data } : null,
      headers: {
        "Content-type": "application/json",
        Authorization: isAuthenticated ? `Bearer ${token}` : null,
      },
    };
  }
};

export const baseApiHandler = async (
  method: string,
  url: string,
  data: { [key: string]: any } | null = null,
  isAuthenticated: boolean = true
) => {
  const res = await axios(configHandler(method, url, data, isAuthenticated));
  return res;
};
