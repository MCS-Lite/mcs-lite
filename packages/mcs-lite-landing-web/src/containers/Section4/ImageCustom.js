import React from 'react';
import Transition from 'react-motion-ui-pack';
import { pure } from 'recompose';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import SVGCard from '../../components/SVG/SVGCard';
import SVGCode from '../../components/SVG/SVGCode';
import SVGSearch from '../../components/SVG/SVGSearch';
import SVGTooltip from '../../components/SVG/SVGTooltip';
import imgCustomizationBackgroundX60 from '../../statics/images/img_customizationX60.png';
import imgCustomizationBackground from '../../statics/images/img_customization.svg';
import ImageLayerWrapper from '../../components/ImageLayerWrapper';
import BackgroundImage from '../../components/BackgroundImage';

const ImageCustom = () =>
  <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0.5 }}>
    <ImageLayerWrapper key="ImageLayerWrapper">
      <BackgroundImage
        src={imgCustomizationBackground}
        placeholder={imgCustomizationBackgroundX60}
      />
      <div>
        <ScrollParallax
          animation={{
            x: -105,
            y: 85,
            playScale: [0, 0.5],
          }}
          style={{ transform: 'translate(-120px, 85px)' }}
          component={SVGTooltip}
        />
      </div>
      <div>
        <ScrollParallax
          animation={{ y: 35, playScale: [0, 0.5] }}
          style={{ transform: 'translateY(0px)' }}
          component={SVGCode}
        />
      </div>
      <div>
        <ScrollParallax
          animation={{ x: 80, y: 22, playScale: [0, 0.5] }}
          style={{ transform: 'translate(95px, 5px)' }}
          component={SVGCard}
        />
      </div>
      <div>
        <ScrollParallax
          animation={{ x: 70, y: 125, playScale: [0, 0.5] }}
          style={{ transform: 'translate(70px, 130px)' }}
          component={SVGSearch}
        />
      </div>
    </ImageLayerWrapper>
  </Transition>;

export default pure(ImageCustom);
