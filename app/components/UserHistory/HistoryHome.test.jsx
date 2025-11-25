// @vitest-environment jsdom

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe } from "vitest";
import { HistoryHome } from "./HistoryHome";
import "@testing-library/jest-dom/vitest";

describe(`HistoryHome`, () => {
  test("Should load the history home", () => {
    render(<HistoryHome />);
    const mainComponent = screen.getByTestId("historyHomeParent");
    // screen.debug();
  });

  test.todo("Should navigate to home when home is clicked", async () => {
    render(<HistoryHome />);
    const user = userEvent.setup();
    const homeButton = screen.getAllByTestId("homeBtn");
    await userEvent.navigate()
    // user.click(homeButton[0]);
    const timeStampBtn = await screen.getByRole("button", {
      name: /timestamp/gi,
    });
    expect(timeStampBtn).toBeDefined();
  });
});
