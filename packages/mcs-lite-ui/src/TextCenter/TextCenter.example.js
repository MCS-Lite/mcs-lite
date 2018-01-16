import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import TextCenter from ".";

storiesOf("TextCenter", module).add(
  "API",
  withInfo({
    text: "",
    inline: true
  })(() => <TextCenter>Center</TextCenter>)
);
