import axios from "axios";

export const getProduct = async ({ productId }: { productId: string }) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${productId}`,
    {
      headers: {
        "Accept-Encoding": "application/json",
      },
    }
  );

  return data;
};
