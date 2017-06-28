import React from 'react';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import Loadable from 'react-loadable';
import { pure } from 'recompose';
import imgScreen from '../../statics/images/img_mcs_screen.png';
import {
  ImageLayerWrapper,
  BackgroundImage,
  BackgroundImageWrapper,
  ChartWrapper,
} from './styled-components';

const IMAGE_HEIGHT = 350; // image = 350 * 580

const LoadabChart = Loadable({
  loader: () => import('./Chart'),
  loading: () => null,
});

const Image = () =>
  <LazyloadOnce height={IMAGE_HEIGHT}>
    <ImageLayerWrapper key="ImageLayerWrapper" height={IMAGE_HEIGHT}>
      <BackgroundImageWrapper>
        <BackgroundImage src={imgScreen} />
      </BackgroundImageWrapper>
      <ChartWrapper>
        <LoadabChart />
      </ChartWrapper>
    </ImageLayerWrapper>
  </LazyloadOnce>;

export default pure(Image);
