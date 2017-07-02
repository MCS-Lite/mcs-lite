import React from 'react';
import { pure } from 'recompose';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
import SVGCard from '../../components/SVG/SVGCard';
import SVGCode from '../../components/SVG/SVGCode';
import SVGSearch from '../../components/SVG/SVGSearch';
import SVGTooltip from '../../components/SVG/SVGTooltip';
import imgCustomizationBackgroundX60 from '../../statics/images/img_customizationX60.png';
import imgCustomizationBackground from '../../statics/images/img_customization.svg';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';

const PLAY_SCALE = 0.2;
const DURATION = 600;
const EASE = 'easeInOutQuart';

const ImageCustom = () =>
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
        src={imgCustomizationBackground}
        placeholder={imgCustomizationBackgroundX60}
      />
    </ScrollOverPack>

    {/* 2. Tooltip (Left) */}
    <ScrollOverPack playScale={PLAY_SCALE}>
      <TweenOne
        key="SVGTooltip"
        animation={{
          x: -105,
          y: 85,
          duration: DURATION,
          ease: EASE,
        }}
        style={{ transform: 'translate(-120px, 85px)' }}
        component={SVGTooltip}
      />
    </ScrollOverPack>

    {/* 3. Code (Center) */}
    <ScrollOverPack
      playScale={PLAY_SCALE}
      always={false} // Remind: only once
    >
      <TweenOne
        key="SVGCode"
        animation={{
          opacity: 1,
          duration: 550,
        }}
        style={{
          opacity: 0.5,
        }}
      >
        <ScrollParallax
          animation={{ y: 35, playScale: [0.2, 0.4], ease: 'easeInOutQuad' }}
          style={{ transform: 'translateY(0px)' }}
          component={SVGCode}
        />
      </TweenOne>
    </ScrollOverPack>

    {/* 4. Card (Right Top) */}
    <ScrollOverPack playScale={PLAY_SCALE}>
      <TweenOne
        key="SVGCard"
        animation={{
          x: 80,
          y: 22,
          duration: DURATION,
          ease: EASE,
        }}
        style={{ transform: 'translate(95px, 5px)' }}
        component={SVGCard}
      />
    </ScrollOverPack>

    {/* 5. Search bar (Right Bottom) */}
    <ScrollOverPack playScale={PLAY_SCALE}>
      <TweenOne
        key="SVGSearch"
        animation={{
          x: 70,
          y: 125,
          duration: DURATION,
          ease: EASE,
        }}
        style={{ transform: 'translate(70px, 130px)' }}
        component={SVGSearch}
      />
    </ScrollOverPack>
  </ImageLayerWrapper>;

export default pure(ImageCustom);
