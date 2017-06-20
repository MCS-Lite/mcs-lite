import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'hedron';
import styled from 'styled-components';
import Heading from 'mcs-lite-ui/lib/Heading';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import SpaceTop from '../../components/SpaceTop';
import SectionRow from '../../components/SectionRow';
import TextCenter from '../../components/TextCenter';
import imgSignal from '../../statics/images/img_signal.svg';
import imgMac from '../../statics/images/img_mac.svg';
import imgIot from '../../statics/images/img_iot.svg';

const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FDFDFD 47%, #FAFAFA 100%);
`;

const MacWrapper = styled.div`
  background-image: url(${imgIot});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

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
            animation={{ opacity: 1, playScale: [0.5, 0.7] }}
            always={false}
            style={{ opacity: 0 }}
          >
            <img src={imgSignal} title={t('title')} alt={t('desc')} />
          </ScrollParallax>
        </SpaceTop>

        <MacWrapper>
          <ScrollParallax
            animation={{ opacity: 1, y: 0, scale: 1, playScale: [0, 0.6] }}
            always={false}
            style={{ opacity: 0.8, transform: 'translateY(60px) scale(0.9)' }}
          >
            <SpaceTop height={20}>
              <StyledImg src={imgMac} title={t('title')} alt={t('desc')} />
            </SpaceTop>
          </ScrollParallax>
        </MacWrapper>
      </TextCenter>
    </Column>
  </StyledSectionRow>;

Section2.displayName = 'Section2';
Section2.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section2;
