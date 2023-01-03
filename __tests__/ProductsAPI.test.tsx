import React, { ReactNode } from "react";
import { renderHook, waitFor } from "@testing-library/react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getProducts } from "../src/utils/apis/products";

function useCustomHook() {
  return useQuery(["products"], getProducts);
}
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
describe("testing products api call", () => {
  test("test for api call", async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          // ✅ turns retries off
          retry: false,
        },
      },
      logger: {
        log: console.log,
        warn: console.warn,
        error: () => {},
      },
    });
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result } = renderHook(() => useCustomHook(), {
      wrapper,
    });

    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toBe(true);
  });
});
