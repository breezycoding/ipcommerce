import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products", {
    headers: {
      "Accept-Encoding": "application/json",
    },
  });
  return data;
};
