import React from 'react';
import styled from 'styled-components';
import rafThrottle from 'raf-throttle';
import Heading from 'mcs-lite-ui/lib/Heading';
import last from 'ramda/src/last';
import DataPointAreaChart from 'mcs-lite-ui/lib/DataPointAreaChart';

const IMAGE_WIDTH = 580; // image = 350 * 580

const Wrapper = styled.div`
  display: flex;
  bottom: 0;
  width: ${IMAGE_WIDTH}px;
  padding-right: 55px;
  box-sizing: border-box;

  > * {
    background: white;
  }
`;

const ChartWrapper = styled.div`
  width: 470px;
  height: 120px;
  transform: translateY(28px);
  margin-left: 37px;

`;

const StyledHeading = styled(Heading)`
  text-align: center;
  width: 68px;
  margin-left: 95px;
  margin-right: 20px;
  margin-top: 50px;
  margin-bottom: 25px;
`;

class Chart extends React.PureComponent {
  state = {
    data: [
      { value: 15, updatedAt: '2016-12-13 00:00' },
      { value: 25, updatedAt: '2016-12-13 00:01' },
      { value: 23, updatedAt: '2016-12-13 00:02' },
      { value: 12, updatedAt: '2016-12-13 00:03' },
      { value: 23, updatedAt: '2016-12-13 00:04' },
      { value: 20, updatedAt: '2016-12-13 00:05' },
      { value: 23, updatedAt: '2016-12-13 00:06' },
    ],
  };
  componentDidMount() {
    this.interval = setInterval(this.appendData, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.appendData.canel();
  }

  appendData = rafThrottle(() => {
    this.setState({
      data: [
        ...this.state.data.slice(1),
        {
          value: Math.round(Math.random() * 30, -2),
          updatedAt: '2016-12-13 00:07',
        },
      ],
    });
  });

  render() {
    const { data } = this.state;

    return (
      <Wrapper>
        <StyledHeading color="primary">{last(data).value}</StyledHeading>
        <ChartWrapper>
          <DataPointAreaChart isAnimationActive data={data} />
        </ChartWrapper>
      </Wrapper>
    );
  }
}

export default Chart;
