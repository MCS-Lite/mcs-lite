// @flow
import * as React from 'react';
import styled from 'styled-components';

const Wrapper: React.ComponentType<*> = styled.div`
  img,
  svg {
    display: inline-block;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.color.grayBase};
    padding: 1px;
    background: ${props => props.theme.color.white};
    box-sizing: border-box;
    object-fit: cover;
  }
`;

export default Wrapper;
