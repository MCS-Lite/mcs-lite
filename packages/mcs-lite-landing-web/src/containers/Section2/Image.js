import React from 'react';
import Transition from 'react-motion-ui-pack';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import { MacImage, BackgroundImageContain } from './styled-components';
import imgMac from '../../statics/images/img_mac.svg';
import imgIot from '../../statics/images/img_iot.svg';

const HEIGHT = 220;

const waypointConfig = {
  topOffset: -300,
  bottomOffset: -300,
  fireOnRapidScroll: true,
};

const Image = () =>
  <LazyloadOnce height={HEIGHT} waypointConfig={waypointConfig}>
    <Transition
      component={false}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0.5 }}
    >
      <ImageLayerWrapper key="ImageLayerWrapper" height={HEIGHT}>
        <BackgroundImageContain src={imgIot} />
        <ScrollParallax
          animation={{ opacity: 1, y: 0, scale: 1, playScale: [0, 0.5] }}
          style={{
            opacity: 0.8,
            transform: 'translateY(60px) scale(0.9)',
          }}
        >
          <MacImage src={imgMac} />
        </ScrollParallax>
      </ImageLayerWrapper>
    </Transition>
  </LazyloadOnce>;

export default Image;
