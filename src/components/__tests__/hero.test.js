import { render, screen } from "@testing-library/react";
import Hero from "../Hero/Hero";
import "@testing-library/jest-dom";

test("should render the description on the hero section", () => {
  render(<Hero />);

  const Description = screen.getByText(
    "Culinary artistry in every bite – welcome to TajByte",
  );
  expect(Description).toBeInTheDocument();
});

test("Hero section should contain buttons", () => {
  render(<Hero />);

  const Menu = screen.getByRole("button", { name: "Menu" });
  const BookATable = screen.getByRole("button", { name: "Book a Table" });

  expect(Menu).toBeInTheDocument();
  expect(BookATable).toBeInTheDocument();
});
