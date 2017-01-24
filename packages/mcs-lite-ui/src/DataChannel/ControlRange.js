import React, { PropTypes } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import withDataChannelCard from './withDataChannelCard';
import InputRange from '../InputRange';
import P from '../P';

const isNumber = R.is(Number);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

const LabelWrapper = styled.div`
  display: flex;

  > *:first-child {
    align-items: ${props => props.labels.length <= 2 ? 'flex-start' : 'center'};
  }

  > *:last-child {
    align-items: ${props => props.labels.length <= 2 ? 'flex-end' : 'center'};
  }
`;

const LabelItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 4px;
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;

  &::before {
    content: "";
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: ${props => props.theme.color.grayDark};
    height: 4px;
    margin-top: 5px;
    margin-bottom: 8px;
  }
`;

const ValueWrapper = styled(P)`
  margin-bottom: 15px;
`;

const Value = styled(P)`
  display: inline-block;
`;

const InputWrapper = styled.div`
  padding: 0 ${props => `${props.labels.length <= 2 ? 0 : (100 / props.labels.length / 2) - 3}%`};
`;

const BaseComponent = ({ value, onChange, labels, valueMapper, children, ...otherProps }) => {
  const min = isNumber(labels[0]) ? labels[0] : 0;
  const max = isNumber(labels[1]) ? labels[1] : labels.length - 1;

  return (
    <Container {...otherProps} >
      <LabelWrapper labels={labels}>
        {labels.map(e => <LabelItem key={e}><P color="grayBase">{e}</P></LabelItem>)}
      </LabelWrapper>

      <InputWrapper labels={labels}>
        {children}

        <ValueWrapper color="grayBase">Current value:&nbsp;
          <Value color="primary">{valueMapper(value)}</Value>
        </ValueWrapper>
        <InputRange min={min} max={max} step={1} value={value} onChange={onChange} />
      </InputWrapper>
    </Container>
  );
};

BaseComponent.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  labels: PropTypes.array.isRequired,
  valueMapper: PropTypes.func, // index: number => string
  children: PropTypes.any,
};

BaseComponent.defaultProps = {
  value: undefined,
  onChange: undefined,
  valueMapper: R.identity,
  children: undefined,
};

export default withDataChannelCard(BaseComponent, 'ControlRange');
