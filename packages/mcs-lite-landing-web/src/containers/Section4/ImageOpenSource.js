import React from 'react';
import { pure } from 'recompose';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
import imgOpenBackgroundX60 from '../../statics/images/img_open_sourceX60.png';
import imgOpenBackground from '../../statics/images/img_open_source.svg';
import SVGCloud from '../../components/SVG/SVGCloud';
import SVGOpenCode1 from '../../components/SVG/SVGOpenCode1';
import SVGOpenCode2 from '../../components/SVG/SVGOpenCode2';
import SVGOpenCode3 from '../../components/SVG/SVGOpenCode3';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';

const PLAY_SCALE = 0.2;
const DURATION = 600;
const EASE = 'easeInOutBack';

const ImageOpenSource = () =>
  <ImageLayerWrapper>

    {/* 1. Background image */}
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
          opacity: 0.3,
        }}
        component={BackgroundImage}
        src={imgOpenBackground}
        placeholder={imgOpenBackgroundX60}
      />
    </ScrollOverPack>

    {/* 2. Code 1 (Left) */}
    <ScrollOverPack playScale={PLAY_SCALE}>
      <TweenOne
        key="SVGOpenCode1"
        animation={{
          x: -40,
          y: 35,
          rotate: -15,
          duration: DURATION,
          ease: EASE,
        }}
        style={{ transform: 'translate(-30px, 30px) rotate(0deg)' }}
        component={SVGOpenCode1}
      />
    </ScrollOverPack>

    {/* 3. Code 3 (Right) */}
    <ScrollOverPack playScale={PLAY_SCALE}>
      <TweenOne
        key="SVGOpenCode3"
        animation={{ x: 40, y: 35, rotate: 15, duration: DURATION, ease: EASE }}
        style={{ transform: 'translate(30px, 30px) rotate(0deg)' }}
        component={SVGOpenCode3}
      />
    </ScrollOverPack>

    {/* 4. Code 2 (Center) */}
    <ScrollOverPack playScale={PLAY_SCALE}>
      <TweenOne
        key="SVGOpenCode2"
        animation={{ y: 20, duration: DURATION, ease: EASE }}
        style={{ transform: 'translateY(25px)' }}
        component={SVGOpenCode2}
      />
    </ScrollOverPack>

    {/* 5. Cloud (Bottom) */}
    <ScrollOverPack
      playScale={PLAY_SCALE}
      always={false} // Remind: only once
    >
      <TweenOne
        key="SVGCloud"
        animation={{
          opacity: 1,
          duration: 550,
        }}
        style={{
          opacity: 0.7,
        }}
      >
        <ScrollParallax
          animation={{ y: 20, playScale: [0.2, 0.4], ease: 'easeInOutQuad' }}
          style={{ transform: 'translateY(0px)' }}
          component={SVGCloud}
        />
      </TweenOne>
    </ScrollOverPack>
  </ImageLayerWrapper>;

export default pure(ImageOpenSource);
