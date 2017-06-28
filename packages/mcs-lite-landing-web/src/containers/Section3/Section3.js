import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'hedron';
import Loadable from 'react-loadable';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import Heading from 'mcs-lite-ui/lib/Heading';
import B from 'mcs-lite-ui/lib/B';
import P from 'mcs-lite-ui/lib/P';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import SectionRow from '../../components/SectionRow';
import { LazyloadIcon, StyledRow } from './styled-components';

const LoadableSVGData = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Section" */ '../../components/SVG/SVGData'),
  loading: () => null,
});
const LoadableSVGRemote = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Section" */ '../../components/SVG/SVGRemote'),
  loading: () => null,
});
const LoadableSVGManagement = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "Section" */ '../../components/SVG/SVGManagement',
    ),
  loading: () => null,
});
const LoadableSVGMobile = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Section" */ '../../components/SVG/SVGMobile'),
  loading: () => null,
});

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
            <LazyloadIcon>
              <LoadableSVGData />
            </LazyloadIcon>
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
            <LazyloadIcon>
              <LoadableSVGRemote />
            </LazyloadIcon>
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
            <LazyloadIcon>
              <LoadableSVGManagement />
            </LazyloadIcon>
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
            <LazyloadIcon>
              <LoadableSVGMobile />
            </LazyloadIcon>
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
