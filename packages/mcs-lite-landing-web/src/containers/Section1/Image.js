import React from 'react';
import PropTypes from 'prop-types';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import Loadable from 'react-loadable';
import { withBreakpoints } from 'hedron';
import { compose, pure } from 'recompose';
import Media from 'react-media';
import IconLoading from 'mcs-lite-icon/lib/IconLoading';
import Spin from 'mcs-lite-ui/lib/Spin';
import P from 'mcs-lite-ui/lib/P';
import imgScreen from '../../statics/images/img_mcs_screen.png';
import imgScreenX66 from '../../statics/images/img_mcs_screenX66.png';
import {
  ImageLayerWrapper,
  BackgroundImage,
  BackgroundImagePlaceholder,
  BackgroundImageWrapper,
  LoadingWrapper,
  ChartWrapper,
  ScreenImageMobile,
} from './styled-components';

const IMAGE_HEIGHT = 350; // image = 350 * 577

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
            {/* 1. RWD Placeholder for Desktop and Mobile */}
            <BackgroundImageWrapper>
              <BackgroundImagePlaceholder src={imgScreenX66} />
            </BackgroundImageWrapper>

            {/* 2. Progressive image loading icon */}
            <LoadingWrapper>
              <P color="primary">
                <Spin><IconLoading size={28} /></Spin>
              </P>
            </LoadingWrapper>

            {/* 3. Large Image for Desktop */}
            <BackgroundImageWrapper>
              <BackgroundImage src={imgScreen} />
            </BackgroundImageWrapper>

            {/* 4. LazyLoad Chart */}
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
