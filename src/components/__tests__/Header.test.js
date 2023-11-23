import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import { expect, test } from "@jest/globals";

import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import MOCK_DATA from "../RestaurantCategory";

import RestaurantCard, { PromotedCard } from "../RestaurantCard";
it("should render login button", () => {
  render(
    /** since testing import from other libraries directly we need to import and wrap it here */
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "login" });
  expect(button).toBeInTheDocument();
});

it("should render cart with 0items", () => {
  render(
    /** since testing import from other libraries directly we need to import and wrap it here */
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByText("Cart(0 items)");
  expect(button).toBeInTheDocument();
});
it("should render cart ", () => {
  render(
    /** since testing import from other libraries directly we need to import and wrap it here */
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  /**
   * - we can use regex to just see if cart is present or not.
   * - if you use regex then it will see if that text is present or not and it doesnt need the exect string to give output and it is case sensitive
   */
  const button = screen.getByText(/Cart/);
  expect(button).toBeInTheDocument();
});

it("should render login button", () => {
  render(
    /** since testing import from other libraries directly we need to import and wrap it here */
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });

  /** fireEvent is used test all the events */
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "logout" });

  expect(logoutButton).toBeInTheDocument();
});

it("should render cards data in the body", () => {
  const info = {
    info: {
      name: "KFC",
      areaName: "Dabolim",
      avgRating: 4.1,
    },
  };
  render(<RestaurantCard resData={MOCK_DATA && info} />);

  const card = screen.getByText("KFC");

  expect(card).toBeInTheDocument();
});

it("should render the promoted card", () => {
  const info = {
    info: {
      name: "KFC",
      areaName: "Dabolim",
      avgRating: 4.1,
    },
  };

  const DisplayPromotedCard = PromotedCard(RestaurantCard);

  render(<DisplayPromotedCard resData={MOCK_DATA && info} />);

  const data = screen.getByText("Open");

  expect(data).toBeInTheDocument();
});
