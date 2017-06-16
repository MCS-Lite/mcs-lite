import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'hedron';
import styled from 'styled-components';
import Heading from 'mcs-lite-ui/lib/Heading';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import SpaceTop from '../../components/SpaceTop';
import SectionRow from '../../components/SectionRow';
import TextCenter from '../../components/TextCenter';
import wifi from '../../statics/images/wifi.svg';
import mac from '../../statics/images/mac.svg';
import macbg from '../../statics/images/macbg.svg';

const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FDFDFD 47%, #FAFAFA 100%);
`;

const MacWrapper = styled.div`
  background-image: url(${macbg});
  background-color: #FAFAFA;
  background-repeat: no-repeat;
  background-position: 100% 100%;
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
          <img src={wifi} alt="wifi" />
        </SpaceTop>

        <MacWrapper>
          <ScrollParallax
            animation={{ opacity: 1, y: 0, playScale: [0, 1] }}
            always={false}
            style={{ opacity: 0.6, transform: 'translateY(80px)' }}
          >
            <SpaceTop height={20}>
              <img src={mac} alt="mac" />
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
