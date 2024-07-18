import axios from "axios";

export const loginService = async ({ email, password }) => {
  try {
    const loginRes = await axios.post(
      `${import.meta.env.VITE_APP_BACKEND_URL}/login`,
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