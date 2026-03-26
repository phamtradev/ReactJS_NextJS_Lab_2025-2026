import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders loading text", () => {
  render(<App />);
  expect(screen.getByText(/Loading restaurants.../i)).toBeInTheDocument();
});
