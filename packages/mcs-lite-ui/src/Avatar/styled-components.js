// @flow
import * as React from 'react';
import styled from 'styled-components';

const Wrapper: React.ComponentType<*> = styled.div`
  img,
  svg {
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #d1d3d4;
    padding: 1px;
    background: #ffffff;
    box-sizing: border-box;
    object-fit: cover;
  }
`;

export default Wrapper;
