import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductsCard from "../src/PagesComponent/ProductsComponent/ProductsCard";
import { TProducts } from "../src/utils/types";
import { getProducts } from "../src/utils/apis/products";

describe("products card component", () => {
  const getProductsCard = ({ products }: TProducts) => {
    render(<ProductsCard products={products} />);
  };

  test("renders product name", async () => {
    const productsData = await getProducts();
    getProductsCard({ products: productsData });
    const productName = screen.getByText(`${productsData[0].title}`);
    expect(productName).toBeDefined();
  });

  test("renders product price", async () => {
    const productsData = await getProducts();
    getProductsCard({ products: productsData });
    const productPrice = screen.getByText(`${productsData[0].price}`);
    expect(productPrice).toBeDefined();
  });

  test("reroute to product page", async () => {
    const productsData = await getProducts();
    getProductsCard({ products: productsData });
    const linkToProductButton = screen.getByRole("link", {
      name: `product-link-${productsData[0].id}`,
    });
    userEvent.click(linkToProductButton);
    expect(linkToProductButton).toHaveAttribute(
      "href",
      `/product/${productsData[0].id}`
    );
  });
});
