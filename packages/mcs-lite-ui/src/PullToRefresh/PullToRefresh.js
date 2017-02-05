/* global document */
// Ref: https://github.com/renatn/react-pull-to-refresh/blob/master/PullToRefresh.jsx

import React, { PropTypes } from 'react';
import Hammer from 'react-hammerjs';
import styled from 'styled-components';
import { IconArrowDown, IconCircleLoading } from 'mcs-lite-icon';
import Heading from '../Heading';
import Spin from '../Spin';

const HEIGHT = 60;
const SENSITIVITY = 2;

const PullWrapper = styled.div`
  margin-top: ${props => Number(props.distance)}px;
  transition: ${props => (props.distance === 0 || props.isRefreshing) ? 'all .25s ease' : 'initial'};
`;

const LoadingContainer = styled.div`
  margin-top: -${HEIGHT}px;
  height: ${HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    transition: all 0.25s ease;
    transform: ${props => props.distance >= HEIGHT ? 'rotate(180deg)' : 'initial'};
  }
`;

class PullToRefresh extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onRefresh: PropTypes.func.isRequired,
    IconArrow: PropTypes.any,
    IconLoading: PropTypes.any,
  }

  static defaultProps = {
    IconArrow: () => <Heading level={2} color="grayBase"><Spin><IconCircleLoading /></Spin></Heading>,
    IconLoading: () => <Heading level={2} color="grayBase"><IconArrowDown /></Heading>,
  }

  state = { distance: 0, isRefreshing: false };

  onPanDownStart = (e) => {
    this.fromY = this.toY = e.srcEvent.pageY;
  }

  onPanDown = (e) => {
    if (document.body.scrollTop > 0) return; // Remind: Skip the event if it's not pulled from top.
    if (this.state.isRefreshing) {
      e.preventDefault(); // Hint: Prevent being pulled while refreshing.
      return;
    }
    e.preventDefault();

    this.toY = e.srcEvent.pageY;
    this.setState({ distance: (this.toY - this.fromY) / SENSITIVITY });
  }

  onPanDownEnd = () => {
    if (this.state.isRefreshing) return; // Remind: Prevent re-refreshing.

    // Remind: Trigger only when it is pulled heigher than HEIGHT.
    if (this.state.distance < HEIGHT) {
      this.reset();
      return;
    }

    this.setState({ distance: HEIGHT, isRefreshing: true });
    this.props.onRefresh(this.reset);
  }

  reset = () => {
    this.setState({ distance: 0, isRefreshing: false });
  }
  render() {
    const { children, IconArrow, IconLoading, ...otherProps } = this.props;
    const { isRefreshing } = this.state;

    return (
      <Hammer
        onPan={this.onPanDown}
        onPanStart={this.onPanDownStart}
        onPanEnd={this.onPanDownEnd}
        direction="DIRECTION_DOWN"
        options={{
          touchAction: 'pan-x pan-y',
        }}
      >
        <PullWrapper
          {...otherProps}
          distance={this.state.distance}
          isRefreshing={isRefreshing}
        >
          <LoadingContainer distance={this.state.distance}>
            {this.state.isRefreshing ? <IconArrow /> : <IconLoading />}
          </LoadingContainer>
          {children}

        </PullWrapper>
      </Hammer>
    );
  }
}

export default PullToRefresh;
