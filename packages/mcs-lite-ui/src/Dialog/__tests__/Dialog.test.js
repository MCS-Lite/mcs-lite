import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import { ThemeProvider } from "styled-components";
import { theme } from "mcs-lite-theme";
import Dialog, { Overlay } from "../Dialog";

it("should render <Dialog />", () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Dialog show>Content</Dialog>
    </ThemeProvider>
  );

  expect(toJson(wrapper.find(Dialog))).toMatchSnapshot();
});

it("should render <Overlay />", () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Overlay />
    </ThemeProvider>
  );

  expect(toJson(wrapper.find(Overlay))).toMatchSnapshot();
});
