import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'hedron';
import styled from 'styled-components';
import Heading from 'mcs-lite-ui/lib/Heading';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import SectionRow from '../../components/SectionRow';
import imgMac from '../../statics/images/img_mac.svg';
import imgIot from '../../statics/images/img_iot.svg';
import SVGSignal from './SVGSignal';

const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FDFDFD 47%, #FAFAFA 100%);
`;

const Background = styled.div`
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  min-height: 220px;

  > * {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
  }
`;

const StyledImg = styled.img`
  height: 100%;
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
            animation={{ opacity: 1, playScale: [0.3, 0.6] }}
            always={false}
            style={{ opacity: 0 }}
            component={SVGSignal}
          />
        </SpaceTop>
        <SpaceTop height={20}>
          <ImageWrapper>
            <Background src={imgIot} />
            <div>
              <ScrollParallax
                animation={{ opacity: 1, y: 0, scale: 1, playScale: [0, 0.5] }}
                style={{
                  opacity: 0.8,
                  transform: 'translateY(60px) scale(0.9)',
                }}
              >
                <StyledImg src={imgMac} title={t('title')} alt={t('desc')} />
              </ScrollParallax>
            </div>
          </ImageWrapper>
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
