import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import R from 'ramda';
import InputRange from '../InputRange';
import P from '../P';
import isNumber from '../utils/isNumber';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const LabelWrapper = styled.div`
  display: flex;

  > *:first-child {
    align-items: ${props =>
      props.labels.length <= 2 ? 'flex-start' : 'center'};
  }

  > *:last-child {
    align-items: ${props => (props.labels.length <= 2 ? 'flex-end' : 'center')};
  }
`;

export const LabelItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 4px;
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;

  &::before {
    content: '';
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: ${props => props.theme.color.grayBase};
    height: 4px;
    margin-top: 5px;
    margin-bottom: 8px;
  }
`;

export const ValueWrapper = styled(P)`
  margin-bottom: 15px;
`;

export const Value = styled(P)`
  display: inline-block;
`;

export const InputWrapper = styled.div`
  padding: 0
    ${props =>
      `${props.labels.length <= 2 ? 0 : 100 / props.labels.length / 2 - 3}%`};
`;

const ControlRange = ({
  value,
  onChange,
  onSubmit,
  labels,
  valueMapper,
  ...otherProps
}) => {
  const min = isNumber(labels[0]) ? labels[0] : 0;
  const max = isNumber(labels[1]) ? labels[1] : labels.length - 1;

  return (
    <Container {...otherProps}>
      <LabelWrapper labels={labels}>
        {labels.map(e => (
          <LabelItem key={e}>
            <P color="grayDark">{e}</P>
          </LabelItem>
        ))}
      </LabelWrapper>

      <InputWrapper labels={labels}>
        <ValueWrapper color="grayDark">
          Current value:&nbsp;
          <Value color="primary">{valueMapper(value)}</Value>
        </ValueWrapper>
        <InputRange
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={onChange}
          onMouseUp={onSubmit} // for desktop
          onTouchEnd={onSubmit} // for mobile
        />
      </InputWrapper>
    </Container>
  );
};

ControlRange.displayName = 'ControlRange';
ControlRange.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // index of labels
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  valueMapper: PropTypes.func, // index: number => value: string
  labels: PropTypes.array.isRequired,
};

ControlRange.defaultProps = {
  valueMapper: R.identity,
};

export default ControlRange;
