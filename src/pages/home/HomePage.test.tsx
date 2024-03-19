// src/pages/home/HomePage.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import mockAxios from "axios";
import HomePage from "./HomePage";
import { makeFakePost } from "../../test/fixtures";

it("renders learn react link", async () => {
  (mockAxios as jest.Mocked<typeof mockAxios>).get.mockImplementation(
    (url: string, _config: any) => {
      if (url.match(/\/posts\?offset=1&limit=3$/)) {
        return Promise.resolve({
          data: {
            count: 2,
            rows: [
              makeFakePost(1, "Fake post #1"),
              makeFakePost(2, "Fake post #2"),
            ],
          },
        });
      }

      return Promise.reject("Call to unexpected URL: " + url);
    }
  );

  render(<HomePage />);

  const pageTitleEl = await screen.findByText("Codaisseur Coders Network");
  expect(pageTitleEl).toBeInTheDocument();

  const postA = await screen.findByText("Fake post #1", {
    selector: "h2",
  });
  expect(postA).toBeInTheDocument();

  const postB = await screen.findByText("Fake post #2", {
    selector: "h2",
  });
  expect(postB).toBeInTheDocument();
});
