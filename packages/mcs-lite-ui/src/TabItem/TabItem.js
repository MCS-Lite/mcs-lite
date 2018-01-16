import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken1, darken2 } from 'mcs-lite-theme';
import R from 'ramda';
import emptyFunction from '../utils/emptyFunction';

const mapBorderColorByActive = R.cond([
  [R.propEq('active', true), props => R.path(['theme', 'color', props.color])],
  [R.T, R.always('transparent')],
]);
const mapColorByActive = R.cond([
  [R.propEq('active', true), props => R.path(['theme', 'color', props.color])],
  [R.T, R.path(['theme', 'color', 'black'])],
]);

export const Item = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: ${props => props.theme.height.normal};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${mapBorderColorByActive};
  color: ${mapColorByActive};
  font-size: ${props => props.theme.fontSize.p};
  padding: 0 15px;
  transition: border-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.1s,
    color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => darken1(props.theme.color[props.color])};
  }

  &:active {
    color: ${props => darken2(props.theme.color[props.color])};
  }
`;

class TabItem extends React.Component {
  onClick = e => this.props.onClick(e, this.props.value);
  render() {
    const { value, ...otherProps } = this.props;
    const { onClick } = this;
    return <Item {...otherProps} value={value} onClick={onClick} />;
  }
}

TabItem.displayName = 'TabItem';
TabItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func, // (e, value) => void
  color: PropTypes.string,
};
TabItem.defaultProps = {
  onClick: emptyFunction,
  color: 'primary',
};

export default TabItem;
