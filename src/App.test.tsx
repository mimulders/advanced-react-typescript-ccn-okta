import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders Signup link", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = await screen.findByText("Signup");
  expect(linkElement).toBeInTheDocument();
});
