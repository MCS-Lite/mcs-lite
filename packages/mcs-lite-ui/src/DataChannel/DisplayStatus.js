import React, { PropTypes } from 'react';
import styled from 'styled-components';
import withDataChannelCard from './withDataChannelCard';
import StatusLight from '../StatusLight';
import P from '../P';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  margin: 0px 4px;
  overflow: hidden;

  > *:first-child {
    margin-bottom: 20px;
  }
`;

const BaseComponent = ({ value, labels, ...otherProps }) =>
  <Container {...otherProps} >
    {
      labels.map((label, index) =>
        <ItemWrapper key={label}>
          <P color="grayBase">{label}</P>
          <div>
            <StatusLight color={value === index ? 'success' : 'grayDark'} />
          </div>
        </ItemWrapper>,
      )
    }
  </Container>;

BaseComponent.propTypes = {
  value: PropTypes.number, // index
  labels: PropTypes.array.isRequired,
};

export default withDataChannelCard(BaseComponent, 'DisplayStatus');
