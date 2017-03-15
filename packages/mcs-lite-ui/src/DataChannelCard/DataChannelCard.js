import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';
import Card from '../Card';
import Heading from '../Heading';
import Small from '../Small';
import P from '../P';
import Hr from '../Hr';
import isString from '../utils/isString';

const setHeightByLine = line => props => `${
  parseFloat(props.theme.fontSize.p, 10) *
  parseFloat(props.theme.base.fontSize, 10) *
  props.theme.base.lineHeight * line
}px`;

const Header = styled.div`
  flex-basis: 24px;
  align-items: center;
  justify-content: flex-end;
  display: flex;
`;

const Body = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

const Description = styled(P)`
  height: ${setHeightByLine(2)};
`;

const StyledHr = styled(Hr)`
  margin: 5px 0;
`;

const Wrapper = styled(Card)`
  height: 300px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledSmall = styled(Small)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.color.grayBase};
`;

const DataChannelCard = ({ header, children, title, subtitle, description, ...otherProps }) =>
  <Wrapper {...otherProps}>
    <Header>{header}</Header>
    <Body>{children}</Body>
    <div>
      <StyledHeading level={4}>{title}</StyledHeading>
      <StyledSmall>{subtitle}</StyledSmall>
      {isString(description) && <StyledHr />}
      {
        isString(description) && (
          <Description>
            <TextTruncate line={2} truncateText=" ..." text={description} />
          </Description>
        )
      }
    </div>
  </Wrapper>;

DataChannelCard.displayName = 'DataChannelCard';
DataChannelCard.propTypes = {
  header: PropTypes.any,
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default DataChannelCard;
