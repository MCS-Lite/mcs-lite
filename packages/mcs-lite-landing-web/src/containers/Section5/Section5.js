import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Transition from 'react-motion-ui-pack';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import { lazyload } from 'react-lazyload';
import SectionRow from '../../components/SectionRow';
import DownloadButton from '../../components/DownloadButton';
import imgSetupBackground from '../../statics/images/img_setup.svg';
import SVGMachine from './SVGMachine';
import SVGScreen from './SVGScreen';

const IMAGE_HEIGHT = 171;

const ImageWrapper = styled.div`
  position: relative;
  height: ${IMAGE_HEIGHT}px;

  > * {
    position: absolute;
    left: 0;
    right: 0;
  }
`;

const ScrollParallaxMachine = styled(ScrollParallax)`
  transform-origin: 143px 0;
`;

const Background = styled.div`
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
`;

const BackgroundOverlay = styled.div`
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 2%, rgba(255, 255, 255, 0) 8%, rgba(255, 255, 255, 0) 92%, rgba(255, 255, 255, 1) 98%);
  height: 100%;
  left: -10px;
  right: -10px;
`;

const StyledTextCenter = styled(TextCenter)`
  overflow-x: hidden;
`;

const Image = lazyload({
  height: IMAGE_HEIGHT,
  once: true,
  throttle: 200,
  offset: 500,
})(() =>
  <Transition component={false} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
    <ImageWrapper key="ImageWrapper">
      <div>
        <ScrollParallax
          animation={{ x: 0, y: 0, playScale: [0, 0.4] }}
          style={{ transform: 'translate(-5px, -32px)' }}
          component={SVGScreen}
        />
      </div>
      <div>
        <ScrollParallaxMachine
          animation={{ rotate: 0, playScale: [0, 0.4] }}
          style={{ transform: 'translateX(60px) rotate(15deg)' }}
          component={SVGMachine}
        />
      </div>
      <Background src={imgSetupBackground} />
      <BackgroundOverlay />
    </ImageWrapper>
  </Transition>,
);

const Section5 = ({ tag, getMessages: t }) =>
  <SectionRow>
    <Column xs={12}>
      <StyledTextCenter>
        <Heading level={2}>{t('title')}</Heading>

        <SpaceTop height={40}>
          <Image />
        </SpaceTop>

        <SpaceTop height={40}>
          <DownloadButton tag={tag} />
        </SpaceTop>
      </StyledTextCenter>
    </Column>
  </SectionRow>;

Section5.displayName = 'Section5';
Section5.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,

  // Props
  tag: PropTypes.string,
};

export default Section5;
