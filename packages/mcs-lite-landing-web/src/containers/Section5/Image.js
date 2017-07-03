/* global window */
import React from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOne from 'rc-tween-one';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';
import imgSetupBackground from '../../statics/images/img_setup.svg';
import imgSetupBackgroundX60 from '../../statics/images/img_setupX60.png';
import SVGMachine from '../../components/SVG/SVGMachine';
import SVGScreen from '../../components/SVG/SVGScreen';
import { BackgroundOverlay } from './styled-components';

const PLAY_SCALE = 0.1;
const DURATION = 600;
const EASE = 'easeOutBounce';
const DELAY = 450;

class Image extends React.PureComponent {
  componentDidMount() {
    // TODO: Dont do this (trigger scroll trick)
    window.scrollTo(window.scrollX, window.scrollY - 1);
    window.scrollTo(window.scrollX, window.scrollY + 1);
    window.scrollTo(window.scrollX, window.scrollY - 1);
    window.scrollTo(window.scrollX, window.scrollY + 1);
  }
  render() {
    return (
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
              delay: DELAY,
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
              delay: DELAY,
            }}
            style={{
              transform: 'translateX(60px) rotate(15deg)',
              transformOrigin: '143px 0',
            }}
            component={SVGMachine}
          />
        </ScrollOverPack>

        {/* 3. Background image */}
        <div>
          <BackgroundImage
            src={imgSetupBackground}
            placeholder={imgSetupBackgroundX60}
          />
        </div>

        {/* 4. Background overlay */}
        <BackgroundOverlay />
      </ImageLayerWrapper>
    );
  }
}

export default Image;
