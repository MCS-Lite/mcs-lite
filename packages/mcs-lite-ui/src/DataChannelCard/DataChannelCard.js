import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';
import Card from '../Card';
import Heading from '../Heading';
import Small from '../Small';
import P from '../P';
import Hr from '../Hr';
import isString from '../utils/isString';

const setHeightByLine = line => props =>
  `${parseFloat(props.theme.fontSize.p, 10) *
    parseFloat(props.theme.base.fontSize, 10) *
    props.theme.base.lineHeight *
    line}px`;

export const Header = styled.div`
  flex-basis: 24px;
  align-items: center;
  justify-content: flex-end;
  display: flex;
`;

export const Body = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const Footer = styled.div`
  display: block;
`;

export const Description = P.extend`
  height: ${setHeightByLine(2)};
`;

export const StyledHr = styled(Hr)`
  margin: 5px 0;
`;

export const Wrapper = styled(Card)`
  height: 300px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledSmall = styled(Small)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.color.grayDark};
`;

const DataChannelCard = ({
  header,
  children,
  title,
  subtitle,
  description,
  ...otherProps
}) => (
  <Wrapper {...otherProps}>
    <Header>{header}</Header>
    <Body>{children}</Body>
    <Footer>
      <StyledHeading level={4}>{title}</StyledHeading>
      <StyledSmall>{subtitle}</StyledSmall>
      {isString(description) && <StyledHr />}
      {isString(description) && (
        <Description>
          <TextTruncate line={2} truncateText=" ..." text={description} />
        </Description>
      )}
    </Footer>
  </Wrapper>
);

DataChannelCard.displayName = 'DataChannelCard';
DataChannelCard.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default DataChannelCard;
