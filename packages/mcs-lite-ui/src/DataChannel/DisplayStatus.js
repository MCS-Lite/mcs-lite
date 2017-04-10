import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatusLight from '../StatusLight';
import P from '../P';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  margin: 0 4px;
  overflow: hidden;

  > *:first-child {
    margin-bottom: 20px;
  }
`;

const DisplayStatus = ({ value, labels, ...otherProps }) =>
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

DisplayStatus.displayName = 'DisplayStatus';
DisplayStatus.propTypes = {
  value: PropTypes.number, // index
  labels: PropTypes.array.isRequired,
};

export default DisplayStatus;
