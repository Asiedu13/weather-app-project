// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoaderComponent from "./main";
import { HistoryHome } from "../UserHistory/HistoryHome";
import { test, expect } from "vitest";

test("Make sure loader loads", () => {
  render(<HistoryHome />);
});
