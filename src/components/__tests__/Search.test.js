import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resMainData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/**
 * - since test doesnt understand the fetch we need to create a mock fetch function
 * - We are trying to make the exactly how the fetch function works
 */
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component with the search", async () => {
  /**
   * - act() is used whenever you use async function and whenever you change/update the state inside the component
   * - await keywords because act() returns a promise
   */

  await act(async () =>
    render(
      <BrowserRouter>
        {/** * - it is not rendering the body in the broweser.. it is rendering
        the body in the jsdom which is browser like 
        * - since the fetch is super power of browser and its not inside js.. so in this testing it doesnt
        understand what is fetch because we dont make a actual network call from he test..therefore we need a mock fetch function */}
        <Body />
      </BrowserRouter>
    )
  );

  const search = screen.getByRole("button", { name: "Search" });

  /** if getByRole is not working or by placeholder or by label then getByTestId always works
   * - e.target.value is provided by browser so we need to simulate it here
   */

  const searchInput = screen.getByTestId("searchInput");

  /** we are simulating the input function here because the e.target.value is provided by the browser */
  fireEvent.change(searchInput, { target: { value: "kfc" } });

  fireEvent.click(search);

  const resCards = screen.getAllByTestId("resCard");
  expect(resCards.length).toBe(1);
});
it("should render the body component with the search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const beforeFilter = screen.getAllByTestId("resCard");

  expect(beforeFilter.length).toBe(8);
});
