import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import Heading from '../Heading';
import PullToRefresh from '.';

const Body = styled.div`
  overflow: hidden;
  background-color: ${props => props.theme.color.grayLight}
`;

const Content = styled.section`
  height: 500px;
  background-color: ${props => props.theme.color.primary}
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  padding: 15px;
`;

const fetchMock = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(123), 3000);
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
            <StyledHeading color="white">
              Pull me down
            </StyledHeading>
            <StyledHeading color="white" level={3}>
              (API will respond after 3 seconds.)
            </StyledHeading>
          </Content>
        </PullToRefresh>
      </Body>,
    { inline: true, propTables: [PullToRefresh]},
  );
