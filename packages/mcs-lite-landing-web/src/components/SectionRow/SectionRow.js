import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Page, Row } from 'hedron';

export const PADDING = 60;
export const PAGE_WIDTH = 960;

const Wrapper = styled.div`
  padding: ${PADDING}px 0;
  background-color: ${props => props.theme.color.white};
`;

const SectionRow = ({ children, ...otherProps }) => (
  <Wrapper {...otherProps}>
    <Page width={`${PAGE_WIDTH}px`}>
      <Row>{children}</Row>
    </Page>
  </Wrapper>
);

SectionRow.displayName = 'SectionRow';
SectionRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionRow;
