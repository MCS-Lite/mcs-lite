import React from 'react';
import Transition from 'react-motion-ui-pack';
import { pure } from 'recompose';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';
import imgSetupBackground from '../../statics/images/img_setup.svg';
import imgSetupBackgroundX60 from '../../statics/images/img_setupX60.png';
import SVGMachine from '../../components/SVG/SVGMachine';
import SVGScreen from '../../components/SVG/SVGScreen';
import { ScrollParallaxMachine, BackgroundOverlay } from './styled-components';

const Image = () =>
  <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
    <ImageLayerWrapper key="ImageLayerWrapper">
      <div>
        <ScrollParallax
          animation={{ x: 0, y: 0, playScale: [0, 0.5] }}
          style={{ transform: 'translate(-5px, -32px)' }}
          component={SVGScreen}
        />
      </div>
      <div>
        <ScrollParallaxMachine
          animation={{ rotate: 0, playScale: [0, 0.5] }}
          style={{ transform: 'translateX(60px) rotate(15deg)' }}
          component={SVGMachine}
        />
      </div>
      <BackgroundImage
        src={imgSetupBackground}
        placeholder={imgSetupBackgroundX60}
      />
      <BackgroundOverlay />
    </ImageLayerWrapper>
  </Transition>;

export default pure(Image);
