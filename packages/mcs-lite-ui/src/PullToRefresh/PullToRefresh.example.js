import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import Heading from '../Heading';
import PullToRefresh from '.';

const Body = styled.div`
  overflow: hidden;
  background-color: ${props => props.theme.color.grayLight};
`;

const Content = styled.section`
  height: 500px;
  background-color: ${props => props.theme.color.primary};
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  padding: 15px;
`;

const fetchMock = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(123), 3000);
  });

class StatefulPullToRefresh extends React.Component {
  state = { isLoading: false };
  onPull = () => {
    this.setState({ isLoading: true });

    fetchMock().then(() => {
      this.setState({ isLoading: false });
    });
  };
  render() {
    return (
      <PullToRefresh isLoading={this.state.isLoading} onPull={this.onPull}>
        <Content>
          <StyledHeading color="white">
            Pull me down
          </StyledHeading>
          <StyledHeading color="white" level={3}>
            (API will respond after 3 seconds.)
          </StyledHeading>
        </Content>
      </PullToRefresh>
    );
  }
}

storiesOf('PullToRefresh', module).addWithInfo(
  'API',
  '',
  () => (
    <Body>
      <StatefulPullToRefresh />
    </Body>
  ),
  { inline: true, propTables: [PullToRefresh] },
);
