import { baseURL } from "./baseURL";

export const handleGetAllProducts = async () => {
  let res = await fetch(`${baseURL}/product/allproducts`);
  let data = await res.json();
  return data;
};
