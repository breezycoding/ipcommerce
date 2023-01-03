import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Drawer from "../src/layout/DrawerNavigation";

describe("testing drawer navigation component", () => {
  beforeEach(() => {
    render(
      <Drawer
        isOpen={true}
        handleOpenDrawer={function (a: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });

  test("test for active link", () => {
    const allProductsButton = screen.getByRole("link");
    userEvent.click(allProductsButton);
    expect(allProductsButton).toHaveAttribute("href", "/products");
  });
  
});
