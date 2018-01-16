import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Img from "../Img";

const Container = styled.div`
  height: 300px;
`;

const StyledImg = styled(Img)`
  height: 100px;
`;

storiesOf("Img", module)
  .add(
    "API",
    withInfo({
      text: 'default size="cover"',
      inline: true
    })(() => (
      <Container>
        <Img src="http://placehold.it/350x150" />
      </Container>
    ))
  )
  .add(
    "With size props",
    withInfo({
      text: 'size="contain"',
      inline: true
    })(() => (
      <Container>
        <Img src="http://placehold.it/350x150" size="contain" />
      </Container>
    ))
  )
  .add(
    "With height override",
    withInfo({
      text: "height=100",
      inline: true
    })(() => <StyledImg src="http://placehold.it/350x150" />)
  );
