import React from 'react';
import styled from 'styled-components';
import Transition from 'react-motion-ui-pack';
import rafThrottle from 'raf-throttle';
import { withBreakpoints } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import last from 'ramda/src/last';
import DataPointAreaChart from 'mcs-lite-ui/lib/DataPointAreaChart';
import imgScreenEmpty from '../../statics/images/img_mcs_screen_empty.png';

const HEIGHT = 350;
const WIDTH = 580;

const ImageLayerWrapper = withBreakpoints(styled.div`
  position: relative;
  height: ${HEIGHT}px;
  display: flex;

  > * {
    position: absolute;
  }

  @media (max-width: ${props => props.breakpoints.md}px) {
    align-items: center;
    justify-content: center;
  }
`);

const BackgroundImage = styled.img`
  height: 100%;
  width: auto;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.10);
`;

const ChartWrapper = styled.div`
  width: 470px;
  height: 120px;
  transform: translateY(35px);
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  width: 68px;
  padding-left: 95px;
  padding-right: 20px;
  padding-top: 50px;
`;

const Right = styled.div`
  display: flex;
  bottom: 0;
  width: ${WIDTH}px;
  padding-right: 55px;
  box-sizing: border-box;
`;

class Image extends React.PureComponent {
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
      <LazyloadOnce height={HEIGHT}>
        <Transition
          component={false}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          <ImageLayerWrapper key="ImageLayerWrapper" height={HEIGHT}>
            <BackgroundImage src={imgScreenEmpty} />
            <Right>
              <StyledHeading color="primary">{last(data).value}</StyledHeading>
              <ChartWrapper>
                <DataPointAreaChart isAnimationActive data={data} />
              </ChartWrapper>
            </Right>
          </ImageLayerWrapper>
        </Transition>
      </LazyloadOnce>
    );
  }
}

export default Image;
