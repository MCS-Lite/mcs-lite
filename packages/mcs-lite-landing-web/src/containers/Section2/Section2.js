import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'hedron';
import Loadable from 'react-loadable';
import Heading from 'mcs-lite-ui/lib/Heading';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import SVGSignal from '../../components/SVG/SVGSignal';
import { StyledSectionRow } from './styled-components';

const HEIGHT = 220;

const waypointConfig = {
  topOffset: -1000,
  bottomOffset: -1000,
  fireOnRapidScroll: true,
};

const LoadableImage = Loadable({
  loader: () => import(/* webpackChunkName: "Section2.Image" */ './Image'),
  loading: () => null,
});

const Section2 = ({ getMessages: t }) =>
  <StyledSectionRow>
    <Column xs={12}>
      <TextCenter>
        <Heading level={2}>{t('title')}</Heading>

        <SpaceTop height={10}>
          <Heading level={4} color="grayBase">{t('desc')}</Heading>
        </SpaceTop>

        <SpaceTop height={40}>
          <ScrollParallax
            animation={{ opacity: 1, playScale: [0.3, 0.5] }}
            style={{ opacity: 0 }}
            component={SVGSignal}
          />
        </SpaceTop>

        <SpaceTop height={20}>
          <LazyloadOnce waypointConfig={waypointConfig} height={HEIGHT}>
            <LoadableImage />
          </LazyloadOnce>
        </SpaceTop>
      </TextCenter>
    </Column>
  </StyledSectionRow>;

Section2.displayName = 'Section2';
Section2.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section2;
