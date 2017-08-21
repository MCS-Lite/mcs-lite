import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';
import { MacImage } from './styled-components';
import imgMac from '../../statics/images/img_mac.svg';
import imgIot from '../../statics/images/img_iot.svg';
import imgIotX60 from '../../statics/images/img_iotX60.png';
import imgMacX60 from '../../statics/images/img_macX60.png';

const BackgroundImageContain = styled(BackgroundImage)`
  max-width: 100%;
`;

const Image = () =>
  <ImageLayerWrapper>

    {/* 1. Background */}
    <div>
      <BackgroundImageContain src={imgIot} placeholder={imgIotX60} />
    </div>

    {/* 2. Mac (Center) */}
    <ScrollParallax
      animation={{
        opacity: 1,
        y: -10,
        scale: 1,
        playScale: [0, 1],
        ease: 'easeOutCubic',
      }}
      style={{
        opacity: 0.5,
        transform: 'translateY(60px) scale(0.9)',
      }}
      component={MacImage}
    >
      <BackgroundImageContain src={imgMac} placeholder={imgMacX60} />
    </ScrollParallax>

  </ImageLayerWrapper>;

export default Image;
