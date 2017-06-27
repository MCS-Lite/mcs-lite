import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column, Hidden, withBreakpoints } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import Loadable from 'react-loadable';
import SectionRow from '../../components/SectionRow';
import DownloadButton from '../../components/DownloadButton';
import imgScreen from '../../statics/images/img_mcs_screen.png';

const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FAFAFA 0%, #F1F2F7 100%);
  padding-bottom: 0;
  overflow: hidden;
`;

const RWDCenterWrapper = withBreakpoints(styled.div`
  @media (max-width: ${props => props.breakpoints.md}px) {
    text-align: center;
  }
`);

const StyledImageColumn = styled(Column)`
  padding-bottom: 0;
`;

const ScreenImageMobile = withBreakpoints(styled.img`
  display: none;
  height: auto;
  width: 100%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.10);

  @media (max-width: ${props => props.breakpoints.sm}px) {
    display: block;
  }
`);

const BackgroundImage = styled.img`
  height: 350px;
  width: auto;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.10);
  display: flex;
`;

const LoadableImage = Loadable({
  loader: () => import('./Image'),
  loading: () => <BackgroundImage src={imgScreen} />,
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
        <LoadableImage />
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
