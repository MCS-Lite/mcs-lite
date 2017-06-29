import React from 'react';
import PropTypes from 'prop-types';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import Loadable from 'react-loadable';
import { withBreakpoints } from 'hedron';
import { compose, pure } from 'recompose';
import Media from 'react-media';
import imgScreen from '../../statics/images/img_mcs_screen.png';
import imgScreenX66 from '../../statics/images/img_mcs_screenX66.png';
import {
  ImageLayerWrapper,
  BackgroundImage,
  BackgroundImageWrapper,
  ChartWrapper,
  ScreenImageMobile,
} from './styled-components';

const IMAGE_HEIGHT = 350; // image = 350 * 580

const LoadabChart = Loadable({
  loader: () => import(/* webpackChunkName: "Section1.Chart" */ './Chart'),
  loading: () => null,
});

const Image = ({ breakpoints }) =>
  <Media query={{ minWidth: breakpoints.sm }}>
    {matches =>
      matches
        ? // Desktop
          <ImageLayerWrapper height={IMAGE_HEIGHT}>
            <BackgroundImageWrapper>
              <BackgroundImage src={imgScreenX66} />
            </BackgroundImageWrapper>
            <BackgroundImageWrapper>
              <BackgroundImage src={imgScreen} />
            </BackgroundImageWrapper>
            <ChartWrapper>
              <LazyloadOnce>
                <LoadabChart />
              </LazyloadOnce>
            </ChartWrapper>
          </ImageLayerWrapper>
        : // mobile
          <ScreenImageMobile src={imgScreen} />}
  </Media>;

Image.displayName = 'Image';
Image.propTypes = {
  breakpoints: PropTypes.shape({
    sm: PropTypes.number.isRequired,
  }).isRequired,
};

export default compose(pure, withBreakpoints)(Image);
