import { PropTypes } from 'react';
import styled from 'styled-components';
import { opacity } from 'mcs-lite-theme';
import R from 'ramda';
import Card from '../Card';

const lighten = opacity(0.1);

const mapColorByKind = props => R.pipe(
  R.path(['kind']),
  R.cond([
    [R.equals('default'), R.always(props.theme.color.grayBase)],
    [R.T, R.always(props.theme.color[props.kind])],
  ]),
);

const Toast = styled(Card)`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: ${props => props.theme.fontSize.p};
  min-height: ${props => props.theme.base.inputHeight};
  color: ${mapColorByKind};
  border: 1px solid ${mapColorByKind};
  background-color: ${props => lighten(props.theme.color[props.kind])};
`;

Toast.displayName = 'Toast';
Toast.propTypes = {
  kind: PropTypes.string,
};
Toast.defaultProps = {
  kind: 'primary',
};


export default Toast;
