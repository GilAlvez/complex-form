import axios from "axios";

const addressParams = {
  access_key: import.meta.env.VITE_POSITION_STACK_ACCESS_KEY,
  limit: 6,
};

export const addressApi = axios.create({
  baseURL: import.meta.env.VITE_POSITION_STACK_BASE_URL,
  params: addressParams,
});
