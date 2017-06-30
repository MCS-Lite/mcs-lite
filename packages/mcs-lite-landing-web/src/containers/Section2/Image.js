import React from 'react';
import Transition from 'react-motion-ui-pack';
import { pure } from 'recompose';
import styled from 'styled-components';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';
import { MacImage } from './styled-components';
import imgMac from '../../statics/images/img_mac.svg';
import imgIot from '../../statics/images/img_iot.svg';
import imgIotX60 from '../../statics/images/img_iotX60.png';

const BackgroundImageContain = styled(BackgroundImage)`
  background-size: contain;
`;

const Image = () =>
  <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0.5 }}>
    <ImageLayerWrapper key="ImageLayerWrapper">
      <BackgroundImageContain src={imgIot} placeholder={imgIotX60} />
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
  </Transition>;

export default pure(Image);
