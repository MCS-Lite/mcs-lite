import React from 'react';
import PropTypes from 'prop-types';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import Loadable from 'react-loadable';
import { withBreakpoints } from 'hedron';
import { compose, pure } from 'recompose';
import Media from 'react-media';
import imgScreen from '../../statics/images/img_mcs_screen.png';
import imgScreenX66 from '../../statics/images/img_mcs_screenX66.png';
import BackgroundImage from '../../components/BackgroundImage';
import { ImageLayerWrapper, ChartWrapper } from './styled-components';

const LoadabChart = Loadable({
  loader: () => import(/* webpackChunkName: "Section1.Chart" */ './Chart'),
  loading: () => null,
});

const Image = ({ breakpoints }) =>
  <ImageLayerWrapper>
    {/* 1. Background Image for Desktop & Mobile */}
    <div>
      <BackgroundImage
        blur={5}
        opacity={0.7}
        src={imgScreen}
        placeholder={imgScreenX66}
      />
    </div>

    {/* 2. LazyLoad Chart for Desktop */}
    <Media query={{ minWidth: breakpoints.sm }}>
      {matches =>
        matches &&
        <ChartWrapper>
          <LazyloadOnce>
            <LoadabChart />
          </LazyloadOnce>
        </ChartWrapper>}
    </Media>
  </ImageLayerWrapper>;

Image.displayName = 'Image';
Image.propTypes = {
  breakpoints: PropTypes.shape({
    sm: PropTypes.number.isRequired,
  }).isRequired,
};

export default compose(pure, withBreakpoints)(Image);
