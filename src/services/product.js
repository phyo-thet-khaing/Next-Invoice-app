import { token } from "./profile";

export const productApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const fetchProduct = (...args) =>
  fetch(...args, {
    //need that because data show yin First login lok ya
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      cache: "no store",
    },
  }).then((res) => res.json());
