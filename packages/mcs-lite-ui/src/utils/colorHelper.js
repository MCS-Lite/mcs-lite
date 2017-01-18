import { css } from 'styled-components';
import R from 'ramda';
import { darken1, darken2, darken3 } from '../utils/darken';

export const mapBackgroundColorByKind = css`
  background-color: ${props => props.theme.color[props.kind]};

  &:hover {
    background-color: ${props => darken1(props.theme.color[props.kind])};
  }

  &:active {
    background-color: ${props => darken2(props.theme.color[props.kind])};
  }
`;

export const mapColorByKind = css`
  color: ${props => R.pipe(
    R.path(['kind']),
    R.cond([
      [R.equals('default'), R.always(props.theme.color.grayBase)],
      [R.T, R.always(props.theme.color.white)],
    ]),
  )};
`;

export const mapBorderColorByKind = css`
  border-color: ${props => darken3(props.theme.color[props.kind])};
`;
