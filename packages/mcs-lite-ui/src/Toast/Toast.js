import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { opacity } from 'mcs-lite-theme';
import R from 'ramda';
import Card from '../Card';
import P from '../P';

const lighten = opacity(0.1);

const mapColorByKind = R.cond([
  [R.propEq('kind', 'default'), R.path(['theme', 'color', 'grayBase'])],
  [R.T, props => R.path(['theme', 'color', props.kind])],
]);

const StyledCard = styled(Card)`
  height: ${props => props.theme.height.normal};
  border: 1px solid ${mapColorByKind};
  background-color: rgba(255, 255, 255, 0.9);
`;

const StyledP = styled(P)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100%;
  color: ${mapColorByKind};
  background-color: ${props => lighten(props.theme.color[props.kind])};
`;

const Toast = ({ children, kind, ...otherProps }) =>
  <StyledCard {...otherProps} kind={kind}>
    <StyledP kind={kind}>
      {children}
    </StyledP>
  </StyledCard>;

Toast.displayName = 'Toast';
Toast.propTypes = {
  kind: PropTypes.string,
};
Toast.defaultProps = {
  kind: 'primary',
};


export default Toast;
