import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import SpaceTop from 'mcs-lite-ui/lib/SpaceTop';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import SVGSignal from '../../components/SVG/SVGSignal';
import Image from './Image';
import { StyledSectionRow } from './styled-components';

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
            animation={{ opacity: 1, playScale: [0, 0.5] }}
            always={false}
            style={{ opacity: 0 }}
            component={SVGSignal}
          />
        </SpaceTop>

        <SpaceTop height={20}>
          <Image />
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
