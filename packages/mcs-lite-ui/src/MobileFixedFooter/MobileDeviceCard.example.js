import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import MobileFixedFooter from ".";
import Button from "../Button";

const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px;

  > * {
    flex: 1;
  }

  > *:last-child {
    margin-left: 16px;
  }
`;

storiesOf("MobileFixedFooter", module).add(
  "API",
  withInfo({
    text: "",
    inline: true
  })(() => (
    <MobileFixedFooter>
      <ButtonWrapper>
        <Button block kind="default">
          Cancel
        </Button>
        <Button block>Submit</Button>
      </ButtonWrapper>
    </MobileFixedFooter>
  ))
);
