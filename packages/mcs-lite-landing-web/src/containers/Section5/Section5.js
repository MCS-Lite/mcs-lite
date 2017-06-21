import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import SpaceTop from '../../components/SpaceTop';
import SectionRow from '../../components/SectionRow';
import TextCenter from '../../components/TextCenter';
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

const Section5 = ({ tag, getMessages: t }) =>
  <SectionRow>
    <Column xs={12}>
      <TextCenter>
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
          </ImageWrapper>
        </SpaceTop>
        <SpaceTop height={40}>
          <DownloadButton tag={tag} />
        </SpaceTop>
      </TextCenter>
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
