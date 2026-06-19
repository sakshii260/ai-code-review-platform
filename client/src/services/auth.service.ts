import axios from "axios";

import type {
  LoginData,
  RegisterData
} from "../types/Auth.types";

const API_URL =
  "http://localhost:5000/api/auth";

export const loginRequest = (
  data: LoginData
) => {

  return axios.post(
    `${API_URL}/login`,
    data
  );

};

export const registerRequest = (
  data: RegisterData
) => {

  return axios.post(
    `${API_URL}/register`,
    data
  );

};