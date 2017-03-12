import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import DataChannelCard from '../DataChannelCard';
import DATA_CHANNELS from './API';
import DataChannelAdapter from '.';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    height: initial;
    padding: 8px 16px;
    margin: 4px;
    flex-basis: 100%;
  }

  > [data-width ~= half] {
    flex-grow: 1;
    flex-basis: 40%;
  }
`;

storiesOf('DataChannelAdapter', module)
  .addWithInfo(
    'API',
    `
      ~~~js
      type Event = {
        type: 'SUBMIT'|'CHANGE'|'CLEAR', // event type
        id: string,                      // data channel id
        values: {                        // datapoint values
          value: string|number,
          period?: number,
        },
      }

      function eventHandler(event: Event): void {}
      ~~~
    `,
    () =>
      <CardWrapper>
        {
          DATA_CHANNELS.map(dataChannel => (
            <DataChannelCard
              key={dataChannel.id}
              data-width="half"
              title={dataChannel.type}
              subtitle="Last data point time : 2015-06-12 12:00"
              description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
              header={<a href="">Link</a>}
            >
              <DataChannelAdapter
                dataChannelProps={dataChannel}
                eventHandler={action('DataChannelAdapter eventHandler(event: Event)')}
              />
            </DataChannelCard>
          ))
        }
      </CardWrapper>,
    { inline: true },
  );
