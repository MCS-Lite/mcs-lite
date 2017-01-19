import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';
import Card from '../Card';
import Heading from '../Heading';
import Small from '../Small';
import P from '../P';

const Subtitle = styled(Small)`
  color: ${props => props.theme.color.grayBase};
`;

const Hr = styled.hr`
  border: 0;
  border-top: 1px solid ${props => props.theme.color.grayDark};
  margin: 5px 0;
`;

const Wrapper = styled(Card)`
  height: 300px;
  width: 280px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;

  > div:nth-child(1) {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DataChannelCard = ({ children, title, subtitle, description }) =>
  <Wrapper>
    <div>
      {children}
    </div>

    <div>
      <Heading level={4}>{title}</Heading>
      <Subtitle>{subtitle}</Subtitle>
      <Hr />
      <P component="div">
        <TextTruncate line={2} truncateText="…" text={description} />
      </P>
    </div>
  </Wrapper>;

DataChannelCard.displayName = 'DataChannelCard';
DataChannelCard.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

DataChannelCard.defaultProps = {
  // kind: 'primary',
};

export default DataChannelCard;
