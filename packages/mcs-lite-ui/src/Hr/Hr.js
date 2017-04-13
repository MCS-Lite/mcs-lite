import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isString from '../utils/isString';

export const StyledHr = styled.hr`
  flex: 1;
  border: 0;
  border-top: 1px solid ${props => props.theme.color.grayDark};
`;

export const Content = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  margin: 0 8px;
  color: ${props => props.theme.color.grayBase};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Hr = ({ children, ...otherProps }) => {
  if (!isString(children)) return <StyledHr {...otherProps} />;

  return (
    <Wrapper {...otherProps}>
      <StyledHr />
      <Content>{children}</Content>
      <StyledHr />
    </Wrapper>
  );
};


Hr.displayName = 'Hr';
Hr.propTypes = {
  children: PropTypes.string,
};

export default Hr;
