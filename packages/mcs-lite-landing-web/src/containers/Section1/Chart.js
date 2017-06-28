import React from 'react';
import styled from 'styled-components';
import rafThrottle from 'raf-throttle';
import Transition from 'react-motion-ui-pack';
import Heading from 'mcs-lite-ui/lib/Heading';
import last from 'ramda/src/last';
import DataPointAreaChart from 'mcs-lite-ui/lib/DataPointAreaChart';
import localTimeFormat from 'mcs-lite-ui/lib/utils/localTimeFormat';

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
  width: 420px;
  height: 120px;
  transform: translateY(29px);
  margin-left: 31px;
`;

const StyledHeading = styled(Heading)`
  font-size: 18px;
  text-align: center;
  width: 68px;
  margin-left: 94px;
  margin-right: 20px;
  margin-top: 62px;
  margin-bottom: 25px;
`;

function getRandomValue(min = 20, max = 35, digits = 2) {
  return Number((Math.random() * (max - min) + min).toFixed(digits));
}

class Chart extends React.PureComponent {
  state = {
    data: [
      { value: 21, updatedAt: '2017-01-13 00:00' },
      { value: 24, updatedAt: '2017-01-13 00:00' },
      { value: 21, updatedAt: '2017-01-13 00:00' },
      { value: 28, updatedAt: '2017-02-13 00:01' },
      { value: 25, updatedAt: '2017-02-13 00:01' },
      { value: 25.2, updatedAt: '2017-02-13 00:01' },
      { value: 28, updatedAt: '2017-03-13 00:02' },
      { value: 28.1, updatedAt: '2017-03-13 00:02' },
      { value: 21.3, updatedAt: '2017-03-13 00:02' },
      { value: 23, updatedAt: '2017-04-13 00:04' },
      { value: 24.3, updatedAt: '2017-04-13 00:04' },
      { value: 24, updatedAt: '2017-04-13 00:04' },
      { value: 20, updatedAt: '2017-05-13 00:05' },
      { value: 21.5, updatedAt: '2017-05-13 00:05' },
      { value: 24.5, updatedAt: '2017-06-13 00:06' },
    ],
  };
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.interval = setInterval(this.appendData, 1500);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
    this.appendData.cancel();
  }

  appendData = rafThrottle(() => {
    this.setState({
      data: [
        ...this.state.data.slice(1),
        {
          value: getRandomValue(),
          updatedAt: localTimeFormat(new Date()),
        },
      ],
    });
  });

  render() {
    const { data } = this.state;

    return (
      <Transition
        component={false}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        <Wrapper key="Wrapper">
          <StyledHeading color="primary">{last(data).value}</StyledHeading>
          <ChartWrapper>
            <DataPointAreaChart isAnimationActive data={data} />
          </ChartWrapper>
        </Wrapper>
      </Transition>
    );
  }
}

export default Chart;
