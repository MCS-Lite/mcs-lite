import React from 'react';
import PropTypes from 'prop-types';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import Loadable from 'react-loadable';
import { withBreakpoints } from 'hedron';
import { compose, pure } from 'recompose';
import Media from 'react-media';
import imgScreen from '../../statics/images/img_mcs_screen.png';
import imgScreenX60 from '../../statics/images/img_mcs_screenX60.png';
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
        ? <ImageLayerWrapper height={IMAGE_HEIGHT}>
            <BackgroundImageWrapper>
              <BackgroundImage src={imgScreenX60} />
            </BackgroundImageWrapper>
            <BackgroundImageWrapper>
              <BackgroundImage src={imgScreen} />
            </BackgroundImageWrapper>
            <ChartWrapper>
              <LoadabChart />
            </ChartWrapper>
          </ImageLayerWrapper>
        : <ScreenImageMobile src={imgScreen} />}
  </Media>;

Image.displayName = 'Image';
Image.propTypes = {
  breakpoints: PropTypes.shape({
    sm: PropTypes.number.isRequired,
  }).isRequired,
};

export default compose(pure, withBreakpoints)(Image);
