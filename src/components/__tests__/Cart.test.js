import { screen, render, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/itemsMock.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should load restaurant menu component", async () => {
  await act(async () => render(<RestaurantMenu />));
  const text = screen.getByText("CHICKEN CHIZZA");

  expect(text).toBeInTheDocument();
});
it("should load clicked accordance", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const text = screen.getByText("CHICKEN CHIZZA");
  fireEvent.click(text);
});
it("should get 5 food items", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const text = screen.getByText("CHICKEN CHIZZA");
  fireEvent.click(text);
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
});
it("should get 5 ADD+", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const text = screen.getByText("CHICKEN CHIZZA");
  fireEvent.click(text);
  const addBtn = screen.getAllByRole("button", { name: "ADD+" });

  expect(addBtn.length).toBe(5);
});
it("cart value should change when ADD+ is clicked", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const text = screen.getByText("CHICKEN CHIZZA");
  fireEvent.click(text);
  const addBtn = screen.getAllByRole("button", { name: "ADD+" });
  fireEvent.click(addBtn[0]);

  const cart = screen.getByText("Cart(1 items)");
  expect(cart).toBeInTheDocument();
  fireEvent.click(addBtn[1]);

  const cart2 = screen.getByText("Cart(2 items)");
  expect(cart2).toBeInTheDocument();
});
it("should render the fooditems in the cart page", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  expect(screen.getAllByTestId("foodItems").length).toBe(2);
});
it("should clear the cart ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const clickClear = screen.getByRole("button", { name: "clear cart" });
  fireEvent.click(clickClear);
  expect(screen.getByText("Nothing in the cart")).toBeInTheDocument();
});
