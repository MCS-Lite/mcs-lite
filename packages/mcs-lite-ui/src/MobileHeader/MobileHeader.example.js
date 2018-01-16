import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { IconMenu, IconSearch } from "mcs-lite-icon";
import { MobileHeader, MobileHeaderIcon } from ".";

storiesOf("MobileHeader", module)
  .add(
    "API",
    withInfo({
      text: "",
      inline: true
    })(() => (
      <MobileHeader
        title="Device List"
        leftChildren={
          <MobileHeaderIcon>
            <IconMenu />
          </MobileHeaderIcon>
        }
      />
    ))
  )
  .add(
    "With right props",
    withInfo({
      text: "",
      inline: true
    })(() => (
      <MobileHeader
        title="Device List"
        leftChildren={
          <MobileHeaderIcon component="div">
            <IconMenu />
          </MobileHeaderIcon>
        }
        rightChildren={
          <MobileHeaderIcon>
            <IconSearch />
          </MobileHeaderIcon>
        }
      />
    ))
  );
