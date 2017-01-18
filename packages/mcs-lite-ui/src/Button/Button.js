// @flow
import styled from 'styled-components';
import R from 'ramda';
import defaultTheme from '../defaultTheme';
import { darken1, darken2, darken3 } from '../utils/darken';

const mapColorByKind = props => R.pipe(
  R.path(['kind']),
  R.cond([
    [R.equals('default'), R.always(props.theme.color.grayBase)],
    [R.T, R.always(props.theme.color.white)],
  ]),
);

const Button = styled.button`
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  cursor: pointer;
  min-width: 80px;
  box-sizing: border-box;
  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  font-size: ${R.path(['theme', 'fontSize', 'p'])};
  color: ${mapColorByKind};
  border-color: ${props => darken3(props.theme.color[props.kind])};
  background-color: ${props => props.theme.color[props.kind]};

  &:hover {
    background-color: ${props => darken1(props.theme.color[props.kind])};
  }

  &:active {
    background-color: ${props => darken2(props.theme.color[props.kind])};
  }
`;

Button.defaultProps = {
  theme: defaultTheme,
  kind: 'primary',
};

export default Button;
