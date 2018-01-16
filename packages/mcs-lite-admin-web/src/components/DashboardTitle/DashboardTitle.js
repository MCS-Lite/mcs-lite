import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "mcs-lite-ui/lib/Heading";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.color.grayDark};
`;

const DashboardTitle = ({ title, children }) => (
  <Wrapper>
    <Heading level={4}>{title}</Heading>
    {children}
  </Wrapper>
);

DashboardTitle.displayName = "DashboardTitle";
DashboardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};
export default DashboardTitle;
