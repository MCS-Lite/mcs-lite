import React from 'react';
import PropTypes from 'prop-types';
import { Column, Hidden } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import Loadable from 'react-loadable';
import Transition from 'react-motion-ui-pack';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import DownloadButton from '../../components/DownloadButton';
import imgScreen from '../../statics/images/img_mcs_screen.png';
import {
  StyledSectionRow,
  RWDCenterWrapper,
  StyledImageColumn,
  ScreenImageMobile,
  ImageLayerWrapper,
  BackgroundImage,
} from './styled-components';

const IMAGE_HEIGHT = 350; // image = 350 * 580

const LoadabChart = Loadable({
  loader: () => import('./Chart'),
  loading: () => null,
});

const Section1 = ({ getMessages: t, tag }) =>
  <StyledSectionRow>
    <Column xs={12} md={6}>
      <Heading level={1}>{t('title')}</Heading>

      <SpaceTop height={20}>
        <Heading level={4} color="grayBase">{t('desc')}</Heading>
      </SpaceTop>

      <SpaceTop height={40}>
        <RWDCenterWrapper>
          <DownloadButton tag={tag} />
        </RWDCenterWrapper>
      </SpaceTop>
    </Column>

    <StyledImageColumn xs={12} md={6}>
      {/* 1. Desktop */}
      <Hidden xs>
        <LazyloadOnce height={IMAGE_HEIGHT}>
          <Transition
            component={false}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            <ImageLayerWrapper key="ImageLayerWrapper" height={IMAGE_HEIGHT}>
              <BackgroundImage src={imgScreen} />
              <LoadabChart />
            </ImageLayerWrapper>
          </Transition>
        </LazyloadOnce>
      </Hidden>

      {/* 2. Mobile */}
      <ScreenImageMobile src={imgScreen} />
    </StyledImageColumn>
  </StyledSectionRow>;

Section1.displayName = 'Section1';
Section1.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,

  // Props
  tag: PropTypes.string,
};

export default Section1;
