// @vitest-environment happy-dom

import { expect, it, vi } from "vitest";
import * as functions from "./functions.js";

it("should be called with the right params", () => {
  const saveWeatherSpy = vi.spyOn(functions, "saveWeather");
  const date = new Date();
  functions.saveWeather("Accra", "100", date, 10, "Some nice weather");
  expect.hasAssertions();
  expect(saveWeatherSpy).toHaveBeenCalled();
  expect(saveWeatherSpy).toHaveBeenCalledWith(
    "Accra",
    "100",
    date,
    10,
    "Some nice weather"
  );
});
