import React from "react";
import { mount } from "enzyme";
import { ThemeProvider } from "styled-components";
import { theme } from "mcs-lite-theme";
import DatetimePicker from "../DatetimePicker";

it("should handle onChange", () => {
  const mockOnChange = jest.fn();
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DatetimePicker
        defaultValue={1455780631722} // Thu Feb 18 2016 15:30:31 GMT+0800 (CST)
        onChange={mockOnChange}
      />
    </ThemeProvider>
  );

  wrapper
    .find(DatetimePicker)
    .instance()
    .onChange(1, { name: "YEAR" });
  expect(mockOnChange).toHaveBeenCalledWith(1487403031722); // Sat Feb 18 2017 15:30:31 GMT+0800 (CST)
});
