import { FC, Fragment } from "react";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ContentContainer from "../../layout/ContentContainer";
import ProductsCard from "./ProductsCard";
import { IProducts } from "../../utils/Interfaces";
import { getProducts } from "../../../src/utils/apis/products";

const ProductsComponent = () => {
  const { data, isFetching, error } = useQuery(["products"], () =>
    getProducts()
  );

  return (
    <Fragment>
      <ContentContainer>
        <ProductsCard products={data} />
      </ContentContainer>
    </Fragment>
  );
};

export default ProductsComponent;
