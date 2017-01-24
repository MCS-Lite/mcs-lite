import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';
import Card from '../Card';
import Heading from '../Heading';
import Small from '../Small';
import P from '../P';

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
  margin-bottom: 5px;
`;

const Body = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 165px;
`;

const Description = styled(P)`
  height: ${setHeightByLine(2)};
`;

const Hr = styled.hr`
  border: 0;
  border-top: 1px solid ${props => props.theme.color.grayDark};
  margin: 5px 0;
`;

const Wrapper = styled(Card)`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

const DataChannelCard = ({ header, children, title, subtitle, description, ...otherProps }) =>
  <Wrapper {...otherProps}>
    <Header>{header}</Header>
    <Body>{children}</Body>
    <div>
      <Heading level={4}>{title}</Heading>
      <P color="grayBase"><Small>{subtitle}</Small></P>
      <Hr />
      <Description><TextTruncate line={2} truncateText=" ..." text={description} /></Description>
    </div>
  </Wrapper>;

DataChannelCard.displayName = 'DataChannelCard';
DataChannelCard.propTypes = {
  header: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

DataChannelCard.defaultProps = {
  // kind: 'primary',
};

export default DataChannelCard;
