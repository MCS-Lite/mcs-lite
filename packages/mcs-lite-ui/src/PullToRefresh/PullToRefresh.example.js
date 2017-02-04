import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import PullToRefresh from '.';

const Body = styled.div`
  ${''/* height: 300px; */}
  overflow: hidden;
`;

const Content = styled.section`
  height: 500px;
`;

const fetchMock = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(123), 1000);
  });

const onRefresh = done =>
  fetchMock().then(() => {
    action('done');
    done();
  });

storiesOf('PullToRefresh', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <Body>
        <PullToRefresh onRefresh={onRefresh}>
          <Content>
            Pull me
          </Content>
        </PullToRefresh>
      </Body>,
    { inline: false },
  );
