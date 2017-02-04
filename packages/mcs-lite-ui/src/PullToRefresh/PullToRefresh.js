import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { IconTrashO, IconEllipsisV } from 'mcs-lite-icon';

const height = 60;

const PullWrapper = styled.div`
  ${''/* position: relative; */}
  ${''/* height: 100%; */}
  ${''/* overflow-y: hidden; */}
  background-color: ${props => props.theme.color.grayBase};
  ${''/* transform: translate3d(0 , ${props => props.distance}px, 0); */}
  margin-top: ${props => props.distance}px;
  transition: all .25s ease;
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
  background-color: green;

  > * {
    transition: all .25s ease;
    transform: rotate(${props => props.distance >= 60 ? 0 : -180}deg);
  }
`;

const ChildrenContainer = styled.div`
  ${''/* position: relative; */}
  ${''/* transform: translate3d(0 , ${props => props.distance}px, 0);
  transition: all .25s ease; */}
  background-color: red;
  ${''/* height: 100%; */}
`;

class PullToRefresh extends React.Component {
  state = { distance: 0, isRefreshing: false };
  onTouchStart = (e) => {
    this.from = e.touches[0].pageY;
    this.to = e.touches[0].pageY;
  }
  onTouchMove = (e) => {
    this.to = e.touches[0].pageY;
    const distance = this.to - this.from;
    if (distance < 0) return;   // disable pulling up
    if (distance > 120) return; // limit range of pulling down
    if (this.state.isRefreshing) return;

    this.setState({ distance: this.to - this.from });
  }
  onTouchEnd = () => {
    if (this.state.distance < height || this.state.isRefreshing) return;

    this.setState({ distance: height, isRefreshing: true });
    this.props.onRefresh(this.doneCallback);
  }

  doneCallback = () => this.setState({ distance: 0, isRefreshing: false });
  render() {
    const { children, ...otherProps } = this.props;

    return (
      <PullWrapper
        {...otherProps}
        distance={this.state.distance}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onTouchMove={this.onTouchMove}
      >
        <LoadingContainer distance={this.state.distance}>
          {this.state.isRefreshing ? <IconEllipsisV /> : <IconTrashO />}
        </LoadingContainer>
        <ChildrenContainer distance={this.state.distance}>
          {children}
        </ChildrenContainer>
      </PullWrapper>
    );
  }
}

export default PullToRefresh;
