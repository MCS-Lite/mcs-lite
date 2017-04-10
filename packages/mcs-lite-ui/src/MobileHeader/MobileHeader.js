import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from 'react-overlays/lib/Portal';
import MobileContentWrapper from '../MobileContentWrapper';
import Heading from '../Heading';
import B from '../B';

export const Container = styled.header`
  height: ${props => props.theme.mobile.headerHeight};
`;

export const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.color.primary};
  height: ${props => props.theme.mobile.headerHeight};
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled(MobileContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
`;

export const Center = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
`;

export const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const StyledHeading = styled(Heading)`
  user-select: none;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const MobileHeader = ({ title, leftChildren, rightChildren, ...otherProps }) =>
  <Container {...otherProps}>
    <Portal>
      <Fixed>
        <Wrapper>
          <Left>{leftChildren}</Left>
          {title &&
            <Center>
              <StyledHeading level={3} color="white"><B>{title}</B></StyledHeading>
            </Center>
          }
          <Right>{rightChildren}</Right>
        </Wrapper>
      </Fixed>
    </Portal>
  </Container>;

MobileHeader.displayName = 'MobileHeader';
MobileHeader.propTypes = {
  title: PropTypes.string,
  leftChildren: PropTypes.any.isRequired,
  rightChildren: PropTypes.any,
};


export default MobileHeader;
