import React from 'react';
import Transition from 'react-motion-ui-pack';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';
import imgSetupBackground from '../../statics/images/img_setup.svg';
import SVGMachine from './SVGMachine';
import SVGScreen from './SVGScreen';
import { ScrollParallaxMachine, BackgroundOverlay } from './styled-components';

const HEIGHT = 171;

const Image = () =>
  <LazyloadOnce height={HEIGHT}>
    <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      <ImageLayerWrapper height={HEIGHT} key="ImageLayerWrapper">
        <div>
          <ScrollParallax
            animation={{ x: 0, y: 0, playScale: [0, 0.4] }}
            style={{ transform: 'translate(-5px, -32px)' }}
            component={SVGScreen}
          />
        </div>
        <div>
          <ScrollParallaxMachine
            animation={{ rotate: 0, playScale: [0, 0.4] }}
            style={{ transform: 'translateX(60px) rotate(15deg)' }}
            component={SVGMachine}
          />
        </div>
        <BackgroundImage src={imgSetupBackground} />
        <BackgroundOverlay />
      </ImageLayerWrapper>
    </Transition>
  </LazyloadOnce>;

export default Image;
