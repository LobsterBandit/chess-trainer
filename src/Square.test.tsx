import React from "react";
import { render, screen } from "@testing-library/react";
import { Square } from "./Square";

describe("<Square />", () => {
  it("shows name of square", () => {
    render(<Square name="a8" />);
    const name = screen.getByText(/a8/);
    expect(name).toBeInTheDocument();
  });

  it("shows piece residing on square", () => {
    render(<Square name="a8" piece="RB1" />);
    const piece = screen.getByText(/RB1/);
    expect(piece).toBeInTheDocument();
  });
});
