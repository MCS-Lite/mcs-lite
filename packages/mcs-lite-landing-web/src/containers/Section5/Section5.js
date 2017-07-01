import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'hedron';
import Loadable from 'react-loadable';
import Heading from 'mcs-lite-ui/lib/Heading';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import SectionRow from '../../components/SectionRow';
import DownloadButton from '../../components/DownloadButton';
import { StyledTextCenter } from './styled-components';

const HEIGHT = 171;

const waypointConfig = {
  topOffset: -1500,
  bottomOffset: -1500,
  fireOnRapidScroll: true,
};

const LoadableImage = Loadable({
  loader: () => import(/* webpackChunkName: "Section" */ './Image'),
  loading: () => null,
});

const Section5 = ({ tag, getMessages: t }) =>
  <SectionRow>
    <Column xs={12}>
      <StyledTextCenter>
        <Heading level={2}>{t('title')}</Heading>

        <SpaceTop height={40}>
          <LazyloadOnce waypointConfig={waypointConfig} height={HEIGHT}>
            <LoadableImage />
          </LazyloadOnce>
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
