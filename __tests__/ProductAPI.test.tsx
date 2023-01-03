import React, { ReactNode } from "react";
import { renderHook, waitFor } from "@testing-library/react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getProduct } from "../src/utils/apis/product";

function useCustomHook() {
  return useQuery({
    queryKey: ["product", 3],
    queryFn: () => getProduct({ productId: "3" }),
  });
}
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
describe("testing products api call", () => {
  test("test for api call", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result } = renderHook(() => useCustomHook(), {
      wrapper,
    });
    console.log(
      "🚀 ~ file: ProductAPI.test.tsx:27 ~ const{result}=renderHook ~ result",
      result.current.data
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
