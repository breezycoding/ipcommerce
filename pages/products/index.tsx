import React, { Fragment } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

import Header from "../../src/layout/Header";
import ProductsComponent from "../../src/PagesComponent/ProductsComponent";
import { getProducts } from "../../src/utils/apis/products";

const Products = () => {
  let sss: string = "hello";

  return (
    <Fragment>
      <Header />
      <ProductsComponent />
    </Fragment>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const queryClient = new QueryClient();

  let isError: boolean = false;

  try {
    // prefetch data on the server
    await queryClient.fetchQuery(["products"], () => getProducts());
  } catch (error: any) {
    isError = true;
    /* ctx.res.statusCode = error.response.status; */
  }

  return { props: { isError, dehydratedState: dehydrate(queryClient) } };
};
