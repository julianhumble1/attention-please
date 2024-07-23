import axios from "axios";

export const loginService = async ({ email, password }) => {
  try {
    const loginRes = await axios.post(
      `http://localhost:3000/user/login`,
      {
        email,
        password,
      }
    );
    return loginRes;
  } catch (e) {
    return e;
  }
};