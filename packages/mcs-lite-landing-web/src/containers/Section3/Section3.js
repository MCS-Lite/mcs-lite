import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import Heading from 'mcs-lite-ui/lib/Heading';
import B from 'mcs-lite-ui/lib/B';
import P from 'mcs-lite-ui/lib/P';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import Lazyload from 'react-lazyload';
import SectionRow from '../../components/SectionRow';
import SVGData from './SVGData';
import SVGRemote from './SVGRemote';
import SVGManagement from './SVGManagement';
import SVGMobile from './SVGMobile';

const IMAGE_HEIGHT = 80;
const lazyloadProps = {
  height: IMAGE_HEIGHT,
  once: true,
  throttle: 200,
  offset: 500,
};

const ImageWrapper = styled.div`
  width: ${IMAGE_HEIGHT}px;
  height: ${IMAGE_HEIGHT}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

const StyledRow = styled(Row)`
  > * {
    &:nth-of-type(4n+1) ${ImageWrapper} {
      background-color: #28B2E6;
    }

    &:nth-of-type(4n+2) ${ImageWrapper} {
      background-color: #FEB439;
    }

    &:nth-of-type(4n+3) ${ImageWrapper} {
      background-color: #36C1CA;
    }

    &:nth-of-type(4n) ${ImageWrapper} {
      background-color: #FF4E84;
    }
  }
`;

const Section3 = ({ getMessages: t }) =>
  <SectionRow>
    <Column xs={12}>
      <TextCenter>
        <Heading level={2}>{t('title')}</Heading>
        <SpaceTop height={10}>
          <Heading level={4} color="grayBase">{t('desc')}</Heading>
        </SpaceTop>
      </TextCenter>
    </Column>

    <StyledRow>
      {/* 1. Data Collection */}
      <Column xs={6} sm={3}>
        <TextCenter>
          <ScrollParallax
            animation={[
              { opacity: 1, y: 10, playScale: [0, 0.4] },
              { opacity: 1, y: 0, playScale: [0.4, 0.5] },
            ]}
            style={{ opacity: 0, transform: 'translateY(-30px)' }}
          >
            <Lazyload {...lazyloadProps}>
              <ImageWrapper>
                <SVGData />
              </ImageWrapper>
            </Lazyload>
          </ScrollParallax>
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('data.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('data.desc')}</P>
          </SpaceTop>
        </TextCenter>
      </Column>

      {/* 2. Remote Control */}
      <Column xs={6} sm={3}>
        <TextCenter>
          <ScrollParallax
            animation={[
              { opacity: 1, y: 10, playScale: [0, 0.4] },
              { opacity: 1, y: 0, playScale: [0.4, 0.5] },
            ]}
            style={{ opacity: 0, transform: 'translateY(-30px)' }}
          >
            <Lazyload {...lazyloadProps}>
              <ImageWrapper>
                <SVGRemote />
              </ImageWrapper>
            </Lazyload>
          </ScrollParallax>
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('remote.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('remote.desc')}</P>
          </SpaceTop>
        </TextCenter>
      </Column>

      {/* 3. Management */}
      <Column xs={6} sm={3}>
        <TextCenter>
          <ScrollParallax
            animation={[
              { opacity: 1, y: 10, playScale: [0, 0.4] },
              { opacity: 1, y: 0, playScale: [0.4, 0.5] },
            ]}
            style={{ opacity: 0, transform: 'translateY(-30px)' }}
          >
            <Lazyload {...lazyloadProps}>
              <ImageWrapper>
                <SVGManagement />
              </ImageWrapper>
            </Lazyload>
          </ScrollParallax>
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('management.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('management.desc')}</P>
          </SpaceTop>
        </TextCenter>
      </Column>

      {/* 4. Mobile */}
      <Column xs={6} sm={3}>
        <TextCenter>
          <ScrollParallax
            animation={[
              { opacity: 1, y: 10, playScale: [0, 0.4] },
              { opacity: 1, y: 0, playScale: [0.4, 0.5] },
            ]}
            style={{ opacity: 0, transform: 'translateY(-30px)' }}
          >
            <Lazyload {...lazyloadProps}>
              <ImageWrapper>
                <SVGMobile />
              </ImageWrapper>
            </Lazyload>
          </ScrollParallax>
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('mobile.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('mobile.desc')}</P>
          </SpaceTop>
        </TextCenter>
      </Column>
    </StyledRow>
  </SectionRow>;

Section3.displayName = 'Section3';
Section3.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section3;
