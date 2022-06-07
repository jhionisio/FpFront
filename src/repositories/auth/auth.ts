import { ILogin } from "../../common/interfaces/login";
import api from "../../providers/api";

export const doLogin = async ({ password, username }: any) => {
  const config = {
    headers: { "Access-Control-Allow-Origin" : "*" }
  };
  const response = await api.post('/auth/login', {
    password,
    username,
  }, config);
  return response.data;
};

export const doSignUp = async ({ email, password, username, cellPhone }: any) => {
  const config = {
    headers: { "Access-Control-Allow-Origin" : "*" }
  };
  const response = await api.post('/user-api/create', {
    email, 
    password, 
    username, 
    cellPhone
  }, config);
  return response.data;
};