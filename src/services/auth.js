export const authApiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const userLogin = (payload) => {
  return fetch(`${authApiUrl}/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const userRegister = (payload) => {
  return fetch(`${authApiUrl}/register`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
