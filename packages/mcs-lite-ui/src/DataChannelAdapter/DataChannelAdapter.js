import React, { PropTypes } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import DataChannel from '../DataChannel';

const Wrapper = styled.div`
  width: 100%;
`;

/**
 * type Event = {
 *   type: 'submit'|'change'|'clear', // event type
 *   id: string,                      // data channel id
 *   values: {                        // datapoint values
 *     value: string|number,
 *     period?: number,
 *   },
 * }
 * function eventHandler(event: Event): void {}
 */

const NO_DATA_PLACEHOLDER = 'N/A';

class DataChannelAdapter extends React.Component {
  static propTypes = {
    dataChannelProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        'SWITCH_CONTROL', 'SWITCH_DISPLAY',
        'INTEGER_CONTROL', 'INTEGER_DISPLAY',
        'STRING_CONTROL', 'STRING_DISPLAY',
        'HEX_CONTROL', 'HEX_DISPLAY',
        'FLOAT_DISPLAY', 'FLOAT_CONTROL',
        'GPIO_CONTROL', 'GPIO_DISPLAY',
        'CATEGORY_CONTROL', 'CATEGORY_DISPLAY',
        'ANALOG_CONTROL',
        'PWM_DISPLAY', 'PWM_CONTROL',
      ]).isRequired,
      values: PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        period: PropTypes.number,
      }).isRequired,
      format: PropTypes.shape({
        unit: PropTypes.string,
        items: PropTypes.array,
        lowerbound: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        upperbound: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }).isRequired,
    }),
    eventHandler: PropTypes.func.isRequired, // (event: object) => void
  }

  // TODO: refactor these handler codes. (maybe hoist)
  switchByType = () => {
    const { dataChannelProps, eventHandler } = this.props;
    const { id, values, type, format } = dataChannelProps;

    return R.cond([
      [R.equals('SWITCH_CONTROL'), () =>
        <DataChannel.ControlSwitch
          value={Boolean(values.value)}
          onSubmit={() => eventHandler({
            type: 'submit',
            id,
            values: { value: !values.value ? 1 : 0 },
          })}
        />,
      ],
      [R.equals('SWITCH_DISPLAY'), () =>
        <DataChannel.DisplayStatus
          value={values.value && values.value ? 1 : 0}
          labels={['OFF', 'ON']}
        />,
      ],
      [R.equals('INTEGER_CONTROL'), () =>
        <DataChannel.ControlNumber
          placeholder="Integer only"
          unit={format.unit && `單位：${format.unit}`}
          value={R.isNil(values.value) ? '' : parseInt(values.value, 10)}
          onSubmit={() => eventHandler({ type: 'submit', id, values })}
          onChange={e => eventHandler({ type: 'change', id, values: { value: e.target.value }})}
          onClear={() => eventHandler({ type: 'clear', id, values: 0 })}
        />,
      ],
      [R.equals('INTEGER_DISPLAY'), () =>
        <DataChannel.DisplayUnitValue
          value={R.isNil(values.value) ? NO_DATA_PLACEHOLDER : values.value}
          unit={format.unit}
        />,
      ],
      [R.equals('STRING_CONTROL'), () =>
        <DataChannel.ControlString
          placeholder="String only"
          value={R.isNil(values.value) ? '' : values.value}
          onSubmit={() => eventHandler({ type: 'submit', id, values })}
          onChange={e => eventHandler({ type: 'change', id, values: { value: e.target.value }})}
          onClear={() => eventHandler({ type: 'clear', id, values: 0 })}
        />,
      ],
      [R.equals('STRING_DISPLAY'), () =>
        <DataChannel.DisplayString
          placeholder="String only"
          value={values.value}
        />,
      ],
      [R.equals('HEX_CONTROL'), () =>
        <DataChannel.ControlString
          placeholder="Hex only"
          value={R.isNil(values.value) ? '' : values.value}
          onSubmit={() => eventHandler({ type: 'submit', id, values })}
          onChange={e => eventHandler({ type: 'change', id, values: { value: e.target.value }})}
          onClear={() => eventHandler({ type: 'clear', id, values: 0 })}
        />,
      ],
      [R.equals('HEX_DISPLAY'), () =>
        <DataChannel.DisplayString
          placeholder="String only"
          value={R.isNil(values.value) ? '' : values.value}
        />,
      ],
      [R.equals('FLOAT_DISPLAY'), () =>
        <DataChannel.DisplayUnitValue
          value={R.isNil(values.value) ? NO_DATA_PLACEHOLDER : values.value}
          unit={format.unit}
        />,
      ],
      [R.equals('FLOAT_CONTROL'), () =>
        <DataChannel.ControlNumber
          placeholder="Float only"
          unit={`單位：${format.unit}`}
          value={R.isNil(values.value) ? '' : parseInt(values.value, 10)}
          onSubmit={() => eventHandler({ type: 'submit', id, values })}
          onChange={e => eventHandler({ type: 'change', id, values: { value: e.target.value }})}
          onClear={() => eventHandler({ type: 'clear', id, values: 0 })}
        />,
      ],
      [R.equals('GPIO_CONTROL'), () => {
        const labels = ['Low', 'High'];
        const valueMapper = index => index ? labels[index] : NO_DATA_PLACEHOLDER;

        return (
          <DataChannel.ControlRange
            value={R.isNil(values.value) ? '' : values.value}
            labels={labels}
            valueMapper={valueMapper}
            onChange={e => eventHandler({
              type: 'change',
              id,
              values: { value: e.target.value },
            })}
            onSubmit={() => eventHandler({
              type: 'submit',
              id,
              values: { value: values.value },
            })}
          />
        );
      }],
      [R.equals('GPIO_DISPLAY'), () =>
        <DataChannel.DisplayStatus
          value={values.value}
          labels={['Low', 'High']}
        />,
      ],
      [R.equals('CATEGORY_CONTROL'), () => {
        const value = values.value
          ? R.findIndex(R.propEq('value', values.value))(format.items)
          : undefined;
        const valueMapper = index => index
          ? format.items[index].value
          : NO_DATA_PLACEHOLDER;

        return (
          <DataChannel.ControlRange
            value={R.isNil(value) ? '' : value}
            labels={format.items.map(R.prop('name'))}
            valueMapper={valueMapper}
            onChange={e => eventHandler({
              type: 'change',
              id,
              values: { value: valueMapper(e.target.value), period: values.period },
            })}
            onSubmit={() => eventHandler({
              type: 'submit',
              id,
              values: { value: valueMapper(values.value), period: values.period },
            })}
          />
        );
      }],
      [R.equals('CATEGORY_DISPLAY'), () => {
        const value = values.value
          ? R.findIndex(R.propEq('value', values.value))(format.items)
          : undefined;

        return (
          <DataChannel.DisplayStatus
            value={value}
            labels={format.items.map(R.prop('name'))}
          />
        );
      }],
      [R.equals('ANALOG_CONTROL'), () => {
        const valueMapper = index => index || NO_DATA_PLACEHOLDER;

        return (
          <DataChannel.ControlRange
            value={R.isNil(values.value) ? '' : values.value}
            valueMapper={valueMapper}
            labels={[
              parseFloat(format.lowerbound, 10),
              parseFloat(format.upperbound, 10),
            ]}
            onChange={e => eventHandler({
              type: 'change',
              id,
              values: { value: e.target.value },
            })}
            onSubmit={() => eventHandler({
              type: 'submit',
              id,
              values: { value: values.value },
            })}
          />
        );
      }],
      [R.equals('PWM_DISPLAY'), () =>
        <DataChannel.DisplayMultipleValue
          items={[
            { name: 'Value', value: R.isNil(values.value) ? NO_DATA_PLACEHOLDER : values.value },
            { name: 'Period', value: R.isNil(values.period) ? NO_DATA_PLACEHOLDER : values.period },
          ]}
        />,
      ],
      [R.equals('PWM_CONTROL'), () => {
        const valueMapper = index => R.isNil(index) ? NO_DATA_PLACEHOLDER : index;

        return (
          <Wrapper>
            <DataChannel.ControlPeriod
              value={R.isNil(values.period) ? '' : values.period}
              onSubmit={() => eventHandler({ type: 'submit', id, values })}
              onChange={e => eventHandler({
                type: 'change',
                id,
                values: { period: e.target.value, value: values.value },
              })}
              placeholder="Integer only"
            />
            <DataChannel.ControlRange
              value={R.isNil(values.value) ? '' : parseFloat(values.value, 10)}
              valueMapper={valueMapper}
              labels={[
                parseFloat(format.lowerbound, 10),
                parseFloat(format.upperbound, 10),
              ]}
              onChange={e => eventHandler({
                type: 'change',
                id,
                values: { value: e.target.value, period: values.period },
              })}
              onSubmit={() => eventHandler({
                type: 'submit',
                id,
                values: { value: values.value, period: values.period },
              })}
            />
          </Wrapper>
        );
      }],
      [R.T, name => <div>{name} NOT SUPPORTED.</div>],
    ])(type);
  }

  render() {
    return this.switchByType();
  }
}

export default DataChannelAdapter;
