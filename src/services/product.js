import useAccountStore from "@/store/useAccountStore";

export const productApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const fetchProduct = (...args) =>
  fetch(...args, {
    //need that because data show yin First login lok ya
    method: "GET",
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
      cache: "no store",
    },
  }).then((res) => res.json());

export const storeProduct = (payload) => {
  return fetch(productApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // you miss double quote
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
    body: JSON.stringify(payload),
  });
};

export const destoryProduct = (id) => {
  return fetchProduct(`${productApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateProduct = (payload, id) => {
  return fetch(`${productApiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // you miss double quote
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
    body: JSON.stringify(payload),
  });
};
