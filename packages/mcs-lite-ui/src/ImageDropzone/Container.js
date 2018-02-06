// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import P from '../P';
import Spin from '../Spin';

type Props = {
  src?: string,
  canDrop: boolean,
  height: number,
};

const Container: React.ComponentType<Props> = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => props.height}px;
  padding: 12px;
  text-align: center;
  box-sizing: border-box;

  background-color: ${props => props.theme.color.grayLight};
  border: 1px dashed
    ${props =>
      props.canDrop ? props.theme.color.primary : props.theme.color.grayDark};
  border-radius: 3px;
  transition: all cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;

  ${props =>
    props.src &&
    css`
      border: 2px solid ${props.theme.color.grayDark};
      background-image: url("${props.src}");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `};

  > ${P} {
    margin-top: 6px;
  }

  > ${Spin} {
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    top: 0;
    padding: 8px;
  }
`;

Container.displayName = 'Container';
Container.propTypes = {
  canDrop: PropTypes.bool.isRequired,
  src: PropTypes.string,
};

export default Container;
