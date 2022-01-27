import axios from "axios";

const BASE_URL = "http://localhost:9000/api/";

const verifyUser = async (code) => {
  return await axios.get(BASE_URL + "confirm/" + code).then((response) => {
    return response.data;
  });
};

const register = async (username, email, password) => {
  return await axios.post(BASE_URL + "register", {
    username,
    email,
    password,
  });
};

export default {
  register,
  verifyUser
};