import React from "react";
import PropTypes from "prop-types";
import { Row } from "hedron";
import styled from "styled-components";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import TweenOne from "rc-tween-one";
import LazyloadOnce from "mcs-lite-ui/lib/LazyloadOnce";

const HEIGHT = 80;

export const ImageWrapper = styled.div`
  width: ${HEIGHT}px;
  height: ${HEIGHT}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const LazyloadIcon = ({ children }) => (
  <LazyloadOnce height={HEIGHT}>
    <ScrollOverPack playScale={0.2}>
      <TweenOne
        key="ImageWrapper"
        animation={{ opacity: 1, y: 10 }}
        style={{ opacity: 0, transform: "translateY(-30px)" }}
      >
        <ImageWrapper>{children}</ImageWrapper>
      </TweenOne>
    </ScrollOverPack>
  </LazyloadOnce>
);

LazyloadIcon.displayName = "LazyloadIcon";
LazyloadIcon.propTypes = {
  children: PropTypes.node.isRequired
};

export const StyledRow = styled(Row)`
  > * {
    &:nth-of-type(4n + 1) ${ImageWrapper} {
      background-color: #28b2e6;
    }

    &:nth-of-type(4n + 2) ${ImageWrapper} {
      background-color: #feb439;
    }

    &:nth-of-type(4n + 3) ${ImageWrapper} {
      background-color: #36c1ca;
    }

    &:nth-of-type(4n) ${ImageWrapper} {
      background-color: #ff4e84;
    }
  }
`;
