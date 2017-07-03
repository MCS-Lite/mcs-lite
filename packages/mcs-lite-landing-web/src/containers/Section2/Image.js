import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
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

const PLAY_SCALE = 0.3;
const DELAY = 250;

const Image = () =>
  <ImageLayerWrapper>

    {/* 1. Background */}
    <ScrollOverPack
      playScale={PLAY_SCALE}
      always={false} // Remind: only once
    >
      <TweenOne
        key="imgIot"
        animation={{
          opacity: 1,
          duration: 350,
          delay: DELAY,
        }}
        style={{
          opacity: 0.3,
        }}
        component={BackgroundImageContain}
        src={imgIot}
        placeholder={imgIotX60}
      />
    </ScrollOverPack>

    {/* 2. Mac (Center) */}
    <ScrollOverPack playScale={PLAY_SCALE}>
      <TweenOne
        key="MacImage"
        animation={{ opacity: 1, y: 0, scale: 1, ease: 'easeOutCubic' }}
        style={{
          opacity: 0.5,
          transform: 'translateY(60px) scale(0.9)',
        }}
        component={MacImage}
      >
        <BackgroundImageContain src={imgMac} placeholder={imgMacX60} />
      </TweenOne>
    </ScrollOverPack>
  </ImageLayerWrapper>;

export default pure(Image);
