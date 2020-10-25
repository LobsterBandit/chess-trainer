import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app name", () => {
  render(<App />);
  const title = screen.getByText(/Chess Trainer/i);
  expect(title).toBeInTheDocument();
});
