import React from 'react';
import { pure } from 'recompose';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';
import imgSetupBackground from '../../statics/images/img_setup.svg';
import imgSetupBackgroundX60 from '../../statics/images/img_setupX60.png';
import SVGMachine from '../../components/SVG/SVGMachine';
import SVGScreen from '../../components/SVG/SVGScreen';
import { BackgroundOverlay } from './styled-components';

const PLAY_SCALE = 0.2;
const DURATION = 600;
const EASE = 'easeOutBounce';

const Image = () =>
  <ImageLayerWrapper>

    {/* 1. Screen */}
    <ScrollOverPack playScale={PLAY_SCALE}>
      <TweenOne
        key="SVGScreen"
        animation={{
          x: 0,
          y: 0,
          duration: DURATION,
          ease: EASE,
        }}
        style={{ transform: 'translate(-5px, -32px)' }}
        component={SVGScreen}
      />
    </ScrollOverPack>

    {/* 2. Machine */}
    <ScrollOverPack playScale={PLAY_SCALE}>
      <TweenOne
        key="SVGMachine"
        animation={{
          rotate: 0,
          duration: DURATION,
          ease: EASE,
        }}
        style={{
          transform: 'translateX(60px) rotate(15deg)',
          transformOrigin: '143px 0',
        }}
        component={SVGMachine}
      />
    </ScrollOverPack>

    {/* 3. Background image */}
    <ScrollOverPack
      playScale={PLAY_SCALE}
      always={false} // Remind: only once
    >
      <TweenOne
        key="BackgroundImage"
        animation={{
          opacity: 1,
          duration: 350,
        }}
        style={{
          opacity: 0.5,
        }}
        component={BackgroundImage}
        src={imgSetupBackground}
        placeholder={imgSetupBackgroundX60}
      />
    </ScrollOverPack>

    {/* 4. Background overlay */}
    <BackgroundOverlay />
  </ImageLayerWrapper>;

export default pure(Image);
