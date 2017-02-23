import React from 'react';
import { storiesOf } from '@kadira/storybook';
import styled from 'styled-components';
import DataPointAreaChart from '.';
import RechartTooltip from './RechartTooltip';

const DemoWrapper = styled.div`
  height: 300px;
`;

const data1 = [
  { value: 5, updatedAt: '2016-12-13 00:00' },
  { value: 25, updatedAt: '2016-12-13 00:01' },
  { value: 75, updatedAt: '2016-12-13 00:02' },
  { value: 89, updatedAt: '2016-12-13 00:03' },
  { value: 23, updatedAt: '2016-12-13 00:04' },
  { value: 41, updatedAt: '2016-12-13 00:05' },
  { value: 23, updatedAt: '2016-12-13 00:06' },
];

const data2 = [
  { value: 0, updatedAt: '2016-12-13 00:00' },
  { value: 0, updatedAt: '2016-12-13 01:00' },
  { value: 1, updatedAt: '2016-12-13 02:00' },
  { value: 1, updatedAt: '2016-12-13 03:00' },
  { value: 0, updatedAt: '2016-12-13 04:00' },
  { value: 0, updatedAt: '2016-12-13 05:00' },
  { value: 1, updatedAt: '2016-12-13 06:00' },
];

storiesOf('DataPointAreaChart', module)
  .addWithInfo(
    'RechartTooltip',
    'Customize',
    () =>
      <RechartTooltip
        active
        payload={[{ value: 1 }]}
        label={1532438716989}
        formatter={value => `formatter(${value})`}
        labelFormatter={value => `labelFormatter(${value})`}
      />,
    { inline: true, propTables: [RechartTooltip]},
  )

  .addWithInfo(
    'API',
    'Default',
    () =>
      <DemoWrapper>
        <DataPointAreaChart data={data1} />
      </DemoWrapper>,
    { inline: true, propTables: [DataPointAreaChart]},
  )

  .addWithInfo(
    'With isAnimationActive props',
    'Render with animation',
    () =>
      <DemoWrapper>
        <DataPointAreaChart isAnimationActive data={data1} />
      </DemoWrapper>,
    { inline: true, propTables: [DataPointAreaChart]},
  )

  .addWithInfo(
    'With kind and type props',
    '',
    () =>
      <DemoWrapper>
        <DataPointAreaChart kind="warning" type="step" data={data2} />
      </DemoWrapper>,
    { inline: true, propTables: [DataPointAreaChart]},
  )

  .addWithInfo(
    'With realtime data',
    '',
    () => {
      class RealtimeChart extends React.Component {
        state = {
          data: [
            { value: 5, updatedAt: '2016-12-13 00:00' },
            { value: 25, updatedAt: '2016-12-13 00:01' },
            { value: 75, updatedAt: '2016-12-13 00:02' },
            { value: 89, updatedAt: '2016-12-13 00:03' },
            { value: 23, updatedAt: '2016-12-13 00:04' },
            { value: 41, updatedAt: '2016-12-13 00:05' },
            { value: 23, updatedAt: '2016-12-13 00:06' },
          ],
        };
        componentDidMount() {
          this.interval = setInterval(() => {
            this.setState({
              data: [
                ...this.state.data.slice(1),
                { value: Math.random() * 15000, updatedAt: '2016-12-13 00:07' },
              ],
            });
          }, 2000);
        }
        componentWillUnmount() {
          clearInterval(this.interval);
        }
        render() {
          return (
            <DemoWrapper>
              <DataPointAreaChart kind="success" data={this.state.data} />
            </DemoWrapper>
          );
        }
      }

      return <RealtimeChart />;
    },
    { inline: true, propTables: [DataPointAreaChart]},
  );
