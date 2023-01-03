import { FC, Fragment } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import ContentContainer from "../../layout/ContentContainer";
import { getProduct } from "../../../src/utils/apis/product";

const ProductsComponent = () => {
  const router = useRouter();
  const productId = typeof router.query?.id === "string" ? router.query.id : "";

  const { data, isFetching, error } = useQuery(["product", productId], () =>
    getProduct({ productId })
  );

  return (
    <Fragment>
      <ContentContainer>
        <p>hello</p>
      </ContentContainer>
    </Fragment>
  );
};

export default ProductsComponent;
