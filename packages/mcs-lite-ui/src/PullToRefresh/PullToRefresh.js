/* global document */
// Ref: https://github.com/renatn/react-pull-to-refresh/blob/master/PullToRefresh.jsx

import React, { PropTypes } from 'react';
import Hammer from 'react-hammerjs';
import styled from 'styled-components';
import { IconTrashO, IconEllipsisV } from 'mcs-lite-icon';

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
    transition: all .25s ease;
    transform: ${props => props.distance >= HEIGHT ? 'rotate(-180deg)' : 'initial'};
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
    IconArrow: IconEllipsisV,
    IconLoading: IconTrashO,
  }

  state = { distance: 0, isRefreshing: false };

  onPanDownStart = (e) => {
    this.fromY = this.toY = e.srcEvent.pageY;
  }

  onPanDown = (e) => {
    if (document.body.scrollTop > 0) return; // 非從頂端往下拉。
    if (this.state.isRefreshing) {
      // 正在 refresh，不要亂動。
      e.preventDefault();
      return;
    }
    e.preventDefault();

    this.toY = e.srcEvent.pageY;
    this.setState({ distance: (this.toY - this.fromY) / SENSITIVITY });
  }

  onPanDownEnd = () => {
    if (this.state.isRefreshing) return; // 正在 refresh，不要打。
    if (this.state.distance < HEIGHT) { // 沒超過一定高度不需要 Refresh。
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
