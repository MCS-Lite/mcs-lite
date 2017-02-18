/* eslint no-underscore-dangle: 0 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import Hammer from 'react-hammerjs';

const CONTAINER_HEIGHT = 200;
const ITEM_HEIGHT = 40;

const ItemWrapper = styled.div`
  padding-top: ${(CONTAINER_HEIGHT / 2) - (ITEM_HEIGHT / 2)}px;
  ${''/* transition: margin 0.0s ease; */}
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${ITEM_HEIGHT}px;
  user-select: none;
  color: ${props => props.active ? props.theme.color.black : props.theme.color.grayDark};
  ${''/* transition: color 0.25s ease; */}
`;

class Picker extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired, // index
    onChange: PropTypes.func,           // (index: number, props: object) => void
    labels: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])).isRequired,
  }

  static defaultProps = {
    value: 0,
  }

  constructor(props) {
    super(props);

    this.state = { distance: this.calcDistanceByIndex(props.value) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ distance: this.calcDistanceByIndex(nextProps.value) });
  }

  onPanVerticalStart = (e) => {
    this.fromY = e.srcEvent.pageY;
    this.toY = this.fromY;
    this.last = this.state.distance;
  }

  onPanVertical = (e) => {
    this.toY = e.srcEvent.pageY;
    this.setState({ distance: this.last + (this.toY - this.fromY) });
    e.preventDefault();
  }

  onPanVerticalEnd = () => {
    // const continueDistance = e.velocityY * e.velocityY * 100;
    const index = this.calcIndexByDistance(this.state.distance);

    if (!this.props.onChange) {
      // Hint: make it control
      this.setState({
        distance: this.calcDistanceByIndex(this.props.value),
      });
    } else {
      this.props.onChange(index, this.props);
    }
  }

  calcDistanceByIndex = (index) => {
    const distance = R.pipe(
      this.clampIndex,
      R.negate,
      R.multiply(ITEM_HEIGHT),
    )(index);

    return distance;
  }
  clampIndex = R.clamp(0, this.props.labels.length - 1);
  calcIndexByDistance = (distance) => {
    const index = R.pipe(
      R.subtract(R.__, ITEM_HEIGHT / 2),
      Math.abs,
      R.divide(R.__, ITEM_HEIGHT),
      Math.ceil,
      R.subtract(R.__, 1),
      this.clampIndex,
    )(distance);

    return index;
  }

  render() {
    const { labels } = this.props;
    const { distance } = this.state;
    const { calcIndexByDistance } = this;

    return (
      <Hammer
        onPan={this.onPanVertical}
        onPanStart={this.onPanVerticalStart}
        onPanEnd={this.onPanVerticalEnd}
        direction="DIRECTION_VERTICAL"
        options={{
          touchAction: 'pan-x pan-y',
        }}
      >
        <ItemWrapper style={{ marginTop: distance }}>
          {
            labels.map((label, index) => (
              <Item key={label} active={calcIndexByDistance(distance) === index}>
                {label}
              </Item>
            ))
          }
        </ItemWrapper>
      </Hammer>
    );
  }
}

export default Picker;
