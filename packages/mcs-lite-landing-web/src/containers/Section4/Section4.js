import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Row, Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import P from 'mcs-lite-ui/lib/P';
import B from 'mcs-lite-ui/lib/B';
import A from 'mcs-lite-ui/lib/A';
import Button from 'mcs-lite-ui/lib/Button';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import SectionRow from '../../components/SectionRow';
import SVGCustomBackground from './SVGCustomBackground';
import SVGCard from './SVGCard';
import SVGCode from './SVGCode';
import SVGSearch from './SVGSearch';
import SVGTooltip from './SVGTooltip';
import SVGOpenBackground from './SVGOpenBackground';
import SVGCloud from './SVGCloud';
import SVGOpenCode1 from './SVGOpenCode1';
import SVGOpenCode2 from './SVGOpenCode2';
import SVGOpenCode3 from './SVGOpenCode3';

const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FDFDFD 47%, #FAFAFA 100%);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 385px;

  > ${A} {

    /* Flexbox column align self to bottom trick ref: https://goo.gl/oqMFju */
    margin-top: auto;
    align-self: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 170px;

  > * {
    position: absolute;
    left: 0;
    right: 0;
  }
`;

const ScrollParallaxCode = styled(ScrollParallax)`
  transform-origin: center bottom;
`;

const ImageCustom = () =>
  <ImageWrapper>
    <div>
      <SVGCustomBackground />
    </div>
    <div>
      <ScrollParallax
        animation={{
          x: -105,
          y: 85,
          playScale: [0, 0.4],
        }}
        style={{ transform: 'translate(-120px, 85px)' }}
        component={SVGTooltip}
      />
    </div>
    <div>
      <ScrollParallax
        animation={{ y: 35, playScale: [0.1, 0.4] }}
        style={{ transform: 'translateY(0px)' }}
        component={SVGCode}
      />
    </div>
    <div>
      <ScrollParallax
        animation={{ x: 80, y: 22, playScale: [0.1, 0.4] }}
        style={{ transform: 'translate(95px, 5px)' }}
        component={SVGCard}
      />
    </div>
    <div>
      <ScrollParallax
        animation={{ x: 70, y: 125, playScale: [0.1, 0.4] }}
        style={{ transform: 'translate(70px, 130px)' }}
        component={SVGSearch}
      />
    </div>
  </ImageWrapper>;

const ImageOpenSouce = () =>
  <ImageWrapper>
    <div><SVGOpenBackground /></div>
    <div>
      <ScrollParallaxCode
        animation={{
          x: -40,
          y: 35,
          rotate: -15,
          playScale: [0.1, 0.4],
        }}
        style={{ transform: 'translate(-30px, 30px) rotate(0deg)' }}
        component={SVGOpenCode1}
      />
    </div>
    <div>
      <ScrollParallaxCode
        animation={{ x: 40, y: 35, rotate: 15, playScale: [0.1, 0.4] }}
        style={{ transform: 'translate(30px, 30px) rotate(0deg)' }}
        component={SVGOpenCode3}
      />
    </div>
    <div>
      <ScrollParallaxCode
        animation={{ y: 20, playScale: [0.1, 0.4] }}
        style={{ transform: 'translateY(25px)' }}
        component={SVGOpenCode2}
      />
    </div>
    <div>
      <ScrollParallax
        animation={{ y: 20, playScale: [0, 0.4] }}
        style={{ transform: 'translateY(0px)' }}
        component={SVGCloud}
      />
    </div>
  </ImageWrapper>;

const Section4 = ({ getMessages: t }) =>
  <StyledSectionRow>
    <Column xs={12}>
      <TextCenter>
        <Heading level={2}>{t('title')}</Heading>
      </TextCenter>
    </Column>

    <Row>
      {/* 1. Open source */}
      <Column xs={12} sm={6}>
        <CardWrapper>
          <ImageOpenSouce />

          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('github.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('github.desc')}</P>
          </SpaceTop>

          <A
            href="https://github.com/MCS-Lite"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button>{t('github.button')}</Button>
          </A>
        </CardWrapper>
      </Column>

      {/* 2. Customize */}
      <Column xs={12} sm={6}>
        <CardWrapper>
          <ImageCustom />

          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('custom.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('custom.desc')}</P>
          </SpaceTop>

          <A
            href="https://github.com/MCS-Lite/cra-boilerplate"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button>{t('custom.button')}</Button>
          </A>
        </CardWrapper>
      </Column>
    </Row>
  </StyledSectionRow>;

Section4.displayName = 'Section4';
Section4.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section4;
