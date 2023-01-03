import React, { Fragment } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

import Header from "../../../src/layout/Header";
import ProductComponent from "../../../src/PagesComponent/ProductComponent";
import { getProduct } from "../../../src/utils/apis/product";

const Product = () => {
  return (
    <Fragment>
      <Header />
      <ProductComponent />
    </Fragment>
  );
};

export default Product;
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const queryClient = new QueryClient();
  const productId: string = ctx?.query?.id;
  let isError: boolean = false;

  try {
    // prefetch data on the server
    await queryClient.fetchQuery(["product", productId], () =>
      getProduct({ productId })
    );
  } catch (error: any) {
    isError = true;
    ctx.res.statusCode = error.response.status;
  }
  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
