import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'hedron';
import styled from 'styled-components';
import Transition from 'react-motion-ui-pack';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';

const HEIGHT = 80;

export const ImageWrapper = styled.div`
  width: ${HEIGHT}px;
  height: ${HEIGHT}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const LazyloadIcon = ({ children }) =>
  <LazyloadOnce height={HEIGHT}>
    <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      <ImageWrapper key="ImageWrapper">
        {children}
      </ImageWrapper>
    </Transition>
  </LazyloadOnce>;
LazyloadIcon.displayName = 'LazyloadIcon';
LazyloadIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export const StyledRow = styled(Row)`
  > * {
    &:nth-of-type(4n+1) ${ImageWrapper} {
      background-color: #28B2E6;
    }

    &:nth-of-type(4n+2) ${ImageWrapper} {
      background-color: #FEB439;
    }

    &:nth-of-type(4n+3) ${ImageWrapper} {
      background-color: #36C1CA;
    }

    &:nth-of-type(4n) ${ImageWrapper} {
      background-color: #FF4E84;
    }
  }
`;
