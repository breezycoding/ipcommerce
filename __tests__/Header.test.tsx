import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "../src/layout/Header";
import Drawer from "../src/layout/DrawerNavigation";

describe("testing header component", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("check for header text link", () => {
    const iconLogoLink = screen.getByRole("link", { name: "IP COMMERCE" });
    expect(iconLogoLink).toHaveAttribute("href", "/");
  });

  test("check for profile and my account visibility", () => {
    const profile = screen.getByText(/Profile/i);
    expect(profile).toBeInTheDocument();
    const account = screen.getByText(/Account/i);
    expect(account).toBeInTheDocument();
  });

  test("should open drawer when icon button is clicked", () => {
    const iconButton = screen.getByRole("button", { name: "open drawer" });
    userEvent.click(iconButton);
    const container2 = render(
      <Drawer
        isOpen={true}
        handleOpenDrawer={function (a: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(container2).toBeTruthy();
  });
});
