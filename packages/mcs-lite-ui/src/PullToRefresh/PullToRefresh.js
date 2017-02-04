/* global document */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { IconTrashO, IconEllipsisV } from 'mcs-lite-icon';

const height = 60;
const SENSITIVITY = 2.5;

const PullWrapper = styled.div`
  ${''/* position: relative; */}
  ${''/* height: 100%; */}
  ${''/* overflow-y: hidden; */}
  ${''/* background-color: ${props => props.theme.color.grayBase}; */}
  ${''/* transform: translate3d(0 , ${props => Number(props.distance)}px, 0); */}
  margin-top: ${props => Number(props.distance)}px;
  ${''/* margin-top: ${props => props.distance}px; */}
  ${''/* transition: all .25s ease; */}
  transition: ${props => (props.distance === 0 || props.isRefreshing) ? 'all .25s ease' : 'initial'};
`;

const LoadingContainer = styled.div`
  ${''/* position: absolute; */}
  margin-top: -${height}px;
  ${''/* width: 100%; */}
  height: ${height}px;
  ${''/* transform: translate3d(0 , ${props => (Number(props.distance) - height)}px, 0); */}
  ${''/* transition: all .25s ease; */}
  display: flex;
  align-items: center;
  justify-content: center;
  ${''/* background-color: green; */}

  > * {
    transition: all .25s ease;
    transform: ${props => props.distance >= 60 ? 'rotate(-180deg)' : 'initial'};
  }
`;
//
// const ChildrenContainer = styled.div`
//   ${''/* position: relative; */}
//   ${''/* transform: translate3d(0 , ${props => props.distance}px, 0);
//   transition: all .25s ease; */}
//   ${''/* background-color: red; */}
//   ${''/* height: 100%; */}
// `;

class PullToRefresh extends React.Component {
  state = { distance: 0, isRefreshing: false };
  onTouchStart = (e) => {
    this.checkPullFromTop();
    if (!this.isPullFromTop) return;

    this.from = this.to = e.touches[0].pageY;
  }
  onTouchMove = (e) => {
    if (!this.isPullFromTop) return;

    this.to = e.touches[0].pageY;
    const distance = (this.to - this.from) / SENSITIVITY;
    if (distance < 0) return;   // disable pulling up
    // if (distance > 120) return; // limit range of pulling down
    if (this.state.isRefreshing) return;
    e.preventDefault();

    this.setState({ distance });
  }
  onTouchEnd = () => {
    if (!this.isPullFromTop) return;

    if (this.state.distance < height) {
      this.doneCallback();
      return;
    }

    this.setState({ distance: height, isRefreshing: true });
    this.props.onRefresh(this.doneCallback);
  }

  doneCallback = () => {
    this.isPullFromTop = false;
    this.setState({ distance: 0, isRefreshing: false });
  }
  checkPullFromTop = () => {
    if (document.body.scrollTop === 0) {
      this.isPullFromTop = true;
    } else {
      this.isPullFromTop = false;
    }
  }
  render() {
    const { children, ...otherProps } = this.props;
    const { isRefreshing } = this.state;

    return (
      <PullWrapper
        {...otherProps}
        distance={this.state.distance}
        isRefreshing={isRefreshing}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onTouchMove={this.onTouchMove}
      >
        <LoadingContainer distance={this.state.distance}>
          {this.state.isRefreshing ? <IconEllipsisV /> : <IconTrashO />}
        </LoadingContainer>
        {children}
      </PullWrapper>
    );
  }
}

export default PullToRefresh;
