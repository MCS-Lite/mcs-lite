import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import Heading from 'mcs-lite-ui/lib/Heading';
import B from 'mcs-lite-ui/lib/B';
import P from 'mcs-lite-ui/lib/P';
import SectionRow from '../../components/SectionRow';
import SpaceTop from '../../components/SpaceTop';
import TextCenter from '../../components/TextCenter';
import iconData from '../../statics/images/icon_data_collection.svg';
import iconRemote from '../../statics/images/icon_remote_control.svg';
import iconManagement from '../../statics/images/icon_management.svg';
import iconMobile from '../../statics/images/icon_mobile_friendly.svg';

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
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
      <Column xs={6} sm={3}>
        <ScrollParallax
          animation={{ opacity: 1, y: 0, playScale: [0, 0.4] }}
          always
          style={{ opacity: 0.4, transform: 'translateY(-30px)' }}
        >
          <TextCenter>
            <ImageWrapper>
              <img
                src={iconData}
                title={t('data.title')}
                alt={t('data.desc')}
              />
            </ImageWrapper>
            <SpaceTop height={20}>
              <Heading level={3}>
                <B>{t('data.title')}</B>
              </Heading>
            </SpaceTop>
            <SpaceTop height={10}>
              <P>{t('data.desc')}</P>
            </SpaceTop>
          </TextCenter>
        </ScrollParallax>
      </Column>

      <Column xs={6} sm={3}>
        <ScrollParallax
          animation={{ opacity: 1, y: 0, playScale: [0.1, 0.4] }}
          always={false}
          style={{ opacity: 0.4, transform: 'translateY(-30px)' }}
        >
          <TextCenter>
            <ImageWrapper>
              <img
                src={iconRemote}
                title={t('remote.title')}
                alt={t('remote.desc')}
              />
            </ImageWrapper>
            <SpaceTop height={20}>
              <Heading level={3}>
                <B>{t('remote.title')}</B>
              </Heading>
            </SpaceTop>
            <SpaceTop height={10}>
              <P>{t('remote.desc')}</P>
            </SpaceTop>
          </TextCenter>
        </ScrollParallax>
      </Column>

      <Column xs={6} sm={3}>
        <ScrollParallax
          animation={{ opacity: 1, y: 0, playScale: [0.2, 0.4] }}
          always={false}
          style={{ opacity: 0.4, transform: 'translateY(-30px)' }}
        >
          <TextCenter>
            <ImageWrapper>
              <img
                src={iconManagement}
                title={t('management.title')}
                alt={t('management.desc')}
              />
            </ImageWrapper>
            <SpaceTop height={20}>
              <Heading level={3}>
                <B>{t('management.title')}</B>
              </Heading>
            </SpaceTop>
            <SpaceTop height={10}>
              <P>{t('management.desc')}</P>
            </SpaceTop>
          </TextCenter>
        </ScrollParallax>
      </Column>

      <Column xs={6} sm={3}>
        <ScrollParallax
          animation={{ opacity: 1, y: 0, playScale: [0.3, 0.4] }}
          always={false}
          style={{ opacity: 0.4, transform: 'translateY(-30px)' }}
        >
          <TextCenter>
            <ImageWrapper>
              <img
                src={iconMobile}
                title={t('mobile.title')}
                alt={t('mobile.desc')}
              />
            </ImageWrapper>
            <SpaceTop height={20}>
              <Heading level={3}>
                <B>{t('mobile.title')}</B>
              </Heading>
            </SpaceTop>
            <SpaceTop height={10}>
              <P>{t('mobile.desc')}</P>
            </SpaceTop>
          </TextCenter>
        </ScrollParallax>
      </Column>
    </StyledRow>
  </SectionRow>;

Section3.displayName = 'Section3';
Section3.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section3;
