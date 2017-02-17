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

class DataChannelAdapter extends React.Component {
  static propTypes = {
    dataChannelProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      values: PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        period: PropTypes.number,
      }).isRequired,
      format: PropTypes.shape({
        unit: PropTypes.string,
        items: PropTypes.array,
        lowerbound: PropTypes.number,
        upperbound: PropTypes.number,
      }).isRequired,
    }),
    eventHandler: PropTypes.func.isRequired, // (event: object) => void
  }
  switchByType = () => {
    const { dataChannelProps, eventHandler } = this.props;
    const { id, values, type, format } = dataChannelProps;

    return R.cond([
      [R.equals('Switch_Control'), () =>
        <DataChannel.ControlSwitch
          value={Boolean(values.value)}
          onSubmit={() => eventHandler({
            type: 'submit',
            id,
            values: { value: !values.value ? 1 : 0 },
          })}
        />,
      ],
      [R.equals('Switch_Display'), () =>
        <DataChannel.DisplayStatus
          value={values.value && values.value ? 1 : 0}
          labels={['OFF', 'ON']}
        />,
      ],
      [R.equals('Integer_Control'), () =>
        <DataChannel.ControlNumber
          placeholder="Integer only"
          unit={`單位：${format.unit}`}
          value={parseInt(values.value, 10)}
          onSubmit={() => eventHandler({ type: 'submit', id, values })}
          onChange={e => eventHandler({ type: 'change', id, values: { value: e.target.value }})}
          onClear={() => eventHandler({ type: 'clear', id, values: 0 })}
        />,
      ],
      [R.equals('Integer_Display'), () =>
        <DataChannel.DisplayUnitValue
          value={values.value}
          unit={format.unit}
        />,
      ],
      [R.equals('String_Control'), () =>
        <DataChannel.ControlString
          placeholder="String only"
          value={values.value}
          onSubmit={() => eventHandler({ type: 'submit', id, values })}
          onChange={e => eventHandler({ type: 'change', id, values: { value: e.target.value }})}
          onClear={() => eventHandler({ type: 'clear', id, values: 0 })}
        />,
      ],
      [R.equals('String_Display'), () =>
        <DataChannel.DisplayString
          placeholder="String only"
          value={values.value}
        />,
      ],
      [R.equals('Hex_Control'), () =>
        <DataChannel.ControlString
          placeholder="Hex only"
          value={values.value}
          onSubmit={() => eventHandler({ type: 'submit', id, values })}
          onChange={e => eventHandler({ type: 'change', id, values: { value: e.target.value }})}
          onClear={() => eventHandler({ type: 'clear', id, values: 0 })}
        />,
      ],
      [R.equals('Hex_Display'), () =>
        <DataChannel.DisplayString
          placeholder="String only"
          value={values.value}
        />,
      ],
      [R.equals('Float_Display'), () =>
        <DataChannel.DisplayUnitValue
          value={values.value}
          unit={format.unit}
        />,
      ],
      [R.equals('Float_Control'), () =>
        <DataChannel.ControlNumber
          placeholder="Float only"
          unit={`單位：${format.unit}`}
          value={parseFloat(values.value, 10)}
          onSubmit={() => eventHandler({ type: 'submit', id, values })}
          onChange={e => eventHandler({ type: 'change', id, values: { value: e.target.value }})}
          onClear={() => eventHandler({ type: 'clear', id, values: 0 })}
        />,
      ],
      [R.equals('GPIO_Control'), () => {
        const labels = ['Low', 'High'];
        const valueMapper = index => labels[index];

        return (
          <DataChannel.ControlRange
            value={values.value}
            labels={labels}
            valueMapper={valueMapper}
            onSubmit={e => eventHandler({
              type: 'submit',
              id,
              values: { value: e.target.value },
            })}
          />
        );
      }],
      [R.equals('GPIO_Display'), () =>
        <DataChannel.DisplayStatus
          value={values.value}
          labels={['Low', 'High']}
        />,
      ],
      [R.equals('Category_Control'), () => {
        const value = R.findIndex(R.propEq('value', values.value))(format.items);
        const valueMapper = index => format.items[index].value;

        return (
          <DataChannel.ControlRange
            value={value}
            labels={format.items.map(R.prop('name'))}
            valueMapper={valueMapper}
            onSubmit={e => eventHandler({
              type: 'submit',
              id,
              values: { value: valueMapper(e.target.value) },
            })}
          />
        );
      }],
      [R.equals('Category_Display'), () => {
        const value = R.findIndex(R.propEq('value', values.value))(format.items);

        return (
          <DataChannel.DisplayStatus
            value={value}
            labels={format.items.map(R.prop('name'))}
          />
        );
      }],
      [R.equals('Analog_Control'), () =>
        <DataChannel.ControlRange
          value={values.value}
          labels={[format.lowerbound, format.upperbound]}
          onSubmit={e => eventHandler({
            type: 'submit',
            id,
            values: { value: e.target.value },
          })}
        />,
      ],
      [R.equals('PWM_Display'), () =>
        <DataChannel.DisplayMultipleValue
          items={[
            { name: 'Value', value: values.value },
            { name: 'Period', value: values.period },
          ]}
        />,
      ],
      [R.equals('PWM_Control'), () =>
        <Wrapper>
          <DataChannel.ControlPeriod
            value={values.period}
            onSubmit={() => eventHandler({ type: 'submit', id, values })}
            onChange={e => eventHandler({
              type: 'change',
              id,
              values: { period: e.target.value, value: values.value },
            })}
            placeholder="Integer only"
          />
          <DataChannel.ControlRange
            value={values.value}
            labels={[format.lowerbound, format.upperbound]}
            onSubmit={e => eventHandler({
              type: 'submit',
              id,
              values: { value: e.target.value, period: values.period },
            })}
          />
        </Wrapper>,
      ],
      [R.T, name => <div>{name} TBD</div>],
    ])(type);
  }

  render() {
    return this.switchByType();
  }
}

export default DataChannelAdapter;
