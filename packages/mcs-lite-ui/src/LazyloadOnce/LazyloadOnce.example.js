import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "../Button";
import LazyloadOnce from ".";

const Wrapper = styled.div`
  height: 2800px;
  padding-top: 1800px;
  background-color: skyblue;
`;

storiesOf("LazyloadOnce", module)
  .add(
    "API",
    withInfo({
      text: `A Wrapper of [react-waypoint](https://github.com/brigade/react-waypoint)`,
      inline: true,
      propTables: [LazyloadOnce]
    })(() => (
      <Wrapper>
        <LazyloadOnce height={24}>
          The component will be rendered while scrolling into viewport with
          500px offset by default.
        </LazyloadOnce>
      </Wrapper>
    ))
  )
  .add(
    "With component props",
    withInfo({
      text: "",
      inline: true,
      propTables: [LazyloadOnce]
    })(() => (
      <Wrapper>
        <LazyloadOnce height={24} component={Button}>
          Lazy button
        </LazyloadOnce>
      </Wrapper>
    ))
  );
