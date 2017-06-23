import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import SectionRow from '../../components/SectionRow';
import DownloadButton from '../../components/DownloadButton';
import imgSetup from '../../statics/images/img_setup.svg';
import imgMachine from '../../statics/images/img_setup_machine.svg';
import imgScreen from '../../statics/images/img_setup_screen.svg';

const ImageWrapper = styled.div`
  position: relative;
  height: 171px;

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
  overflow-x: hidden;;
`;

const Section5 = ({ tag, getMessages: t }) =>
  <SectionRow>
    <Column xs={12}>
      <StyledTextCenter>
        <Heading level={2}>{t('title')}</Heading>
        <SpaceTop height={40}>
          <ImageWrapper>
            <div>
              <ScrollParallax
                animation={{ x: 0, y: 0, playScale: [0, 0.4] }}
                style={{ transform: 'translate(-5px, -32px)' }}
                component="img"
                src={imgScreen}
                alt="screen"
              />
            </div>
            <div>
              <ScrollParallaxMachine
                animation={{ rotate: 0, playScale: [0, 0.4] }}
                style={{ transform: 'translateX(60px) rotate(15deg)' }}
                component="img"
                src={imgMachine}
                alt="machine"
              />
            </div>
            <Background src={imgSetup} />
            <BackgroundOverlay />
          </ImageWrapper>
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
