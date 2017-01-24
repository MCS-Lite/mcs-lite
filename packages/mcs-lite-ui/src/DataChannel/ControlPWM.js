import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import withDataChannelCard from './withDataChannelCard';
import InputRange from '../InputRange';
import P from '../P';
import Input from '../Input';
import Button from '../Button';

const isNumber = R.is(Number);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LabelItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 4px;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 0;
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

const InputRangeWrapper = styled.div`
  padding: 0 ${props => `${(100 / props.labels.length / 2) - 3}%`};
`;

const BaseComponent = ({ value, onChange, labels, valueMapper, extendChildren, ...otherProps }) => {
  const min = isNumber(labels[0]) ? labels[0] : 0;
  const max = isNumber(labels[1]) ? labels[1] : labels.length - 1;

  return (
    <Container {...otherProps} >
      <LabelWrapper>
        {extendChildren}
        {labels.map(e => <LabelItem key={e}><P color="grayBase">{e}</P></LabelItem>)}
      </LabelWrapper>

      <InputRangeWrapper labels={labels}>
        <ValueWrapper color="grayBase">Current value:&nbsp;
          <Value color="primary">{valueMapper(value)}</Value>
        </ValueWrapper>
        <InputRange min={min} max={max} step={1} value={value} onChange={onChange} />
      </InputRangeWrapper>

      <InputWrapper>
        <Input />
        <Button>OK</Button>
      </InputWrapper>
    </Container>
  );
};

// BaseComponent.propTypes = {
//   value: PropTypes.number,
//   onChange: PropTypes.func,
//   onSubmit: PropTypes.func,
// };

BaseComponent.defaultProps = {
  valueMapper: R.identity,
};

export default withDataChannelCard(BaseComponent, 'ControlPWM');
