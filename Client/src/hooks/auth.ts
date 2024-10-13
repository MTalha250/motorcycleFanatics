import axios from "axios";

export const login = async (email: string, password: string) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_BASE_URI}/premium-login`,
    {
      email,
      password,
    }
  );
  localStorage.setItem("token", data.token);
  return data;
};

export const register = async (values: object) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_BASE_URI}/premium-signup`,
    values
  );
  localStorage.setItem("token", data.token);
  return data;
};

export const logout = async () => {
  await axios.post(
    `${import.meta.env.VITE_BASE_URI}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  localStorage.removeItem("token");
  return null;
};

export const loginBack = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_URI}/get-premium-user-by-token`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return { user: data, token };
};
