/* global document */
// Ref: https://github.com/renatn/react-pull-to-refresh/blob/master/PullToRefresh.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Hammer from 'react-hammerjs';
import styled from 'styled-components';
import { IconGoDown, IconLoading as MLIconLoading } from 'mcs-lite-icon';
import Heading from '../Heading';
import Spin from '../Spin';

const HEIGHT = 60;
const SENSITIVITY = 2;

export const PullWrapper = styled.div`
  transition: ${props =>
    props.distance === 0 || props.isLoading ? 'all .25s ease' : 'initial'};
`;

export const LoadingContainer = styled.div`
  margin-top: -${HEIGHT}px;
  height: ${HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    transition: all 0.25s ease;
    transform: ${props =>
      props.distance >= HEIGHT ? 'rotate(180deg)' : 'initial'};
  }
`;

class PullToRefresh extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onPull: PropTypes.func.isRequired,
    IconArrow: PropTypes.any,
    IconLoading: PropTypes.any,
  };

  static defaultProps = {
    IconLoading: () =>
      <Heading level={2} color="grayBase">
        <Spin><MLIconLoading /></Spin>
      </Heading>,
    IconArrow: () =>
      <Heading level={2} color="grayBase"><IconGoDown /></Heading>,
  };

  constructor(props) {
    super(props);
    this.state = { distance: props.isLoading ? HEIGHT : 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading) return this.setLoading();

    return this.reset();
  }

  onPanDownStart = () => {
    this.fromY = 0;
    this.toY = this.fromY;
  };

  onPanDown = e => {
    if (document.body.scrollTop > 0) return; // Remind: Skip the event if it's not pulled from top.
    if (this.props.isLoading) {
      e.preventDefault(); // Hint: Prevent being pulled while refreshing.
      return;
    }
    e.preventDefault();

    this.toY = e.deltaY;
    this.setState({ distance: (this.toY - this.fromY) / SENSITIVITY });
  };

  onPanDownEnd = () => {
    if (this.props.isLoading) return; // Remind: Prevent re-refreshing.

    // Remind: Trigger only when it is pulled heigher than HEIGHT.
    if (this.state.distance < HEIGHT) {
      this.reset();
      return;
    }

    this.setLoading();
    this.props.onPull();
  };

  setLoading = () => this.setState({ distance: HEIGHT });
  reset = () => this.setState({ distance: 0 });

  render() {
    const {
      children,
      isLoading,
      IconArrow,
      IconLoading,
      ...otherProps
    } = this.props;
    const { distance } = this.state;

    return (
      <Hammer
        onPan={this.onPanDown}
        onPanStart={this.onPanDownStart}
        onPanEnd={this.onPanDownEnd}
        direction="DIRECTION_DOWN"
        options={{ touchAction: 'pan-x pan-y' }}
      >
        <PullWrapper
          {...otherProps}
          distance={distance}
          isLoading={isLoading}
          style={{ marginTop: distance }}
        >
          <LoadingContainer distance={distance}>
            {isLoading ? <IconLoading /> : <IconArrow />}
          </LoadingContainer>
          {children}
        </PullWrapper>
      </Hammer>
    );
  }
}

export default PullToRefresh;
