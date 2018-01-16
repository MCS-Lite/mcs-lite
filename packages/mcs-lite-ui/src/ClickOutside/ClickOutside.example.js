/* eslint react/no-multi-comp: 0 */

import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import ClickOutside from ".";
import Card from "../Card";

storiesOf("ClickOutside", module).add(
  "API",
  withInfo({
    text: "",
    inline: true,
    propTables: [ClickOutside]
  })(() => (
    <ClickOutside onClick={action("ClickOutside")}>
      <Card>Inside (Try to click outside.)</Card>
    </ClickOutside>
  ))
);
