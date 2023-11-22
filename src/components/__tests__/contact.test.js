import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import Contact from "../Contact";
import "@testing-library/jest-dom";

/**
 * -small group of test cases using describe
 */
describe("COntact us page text", () => {
  test("it should render", () => {
    /**renders the component on the jsdom */
    render(<Contact />);

    /**
     * - what ever you render on the jsdom you can get access to that through screen
     * - heading will get a react element in return from the screen */
    const heading = screen.getByRole("heading");

    /**
     * - this function will check if my header is present or not
     * - toBeInTheDocument() function is from @testing-library/jest-dom
     */

    //assertion
    expect(heading).toBeInTheDocument();
  });
  it("it should render", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  test("it should render", () => {
    render(<Contact />);
    const button = screen.getByPlaceholderText("name");
    expect(button).toBeInTheDocument();
  });
  it("it should render", () => {
    render(<Contact />);

    /**
     * - For multiple "input" use "getAllByRole" and it will return an array
     *
     */
    const button = screen.getAllByRole("textbox");
    expect(button.length).toBe(2);
  });
});
