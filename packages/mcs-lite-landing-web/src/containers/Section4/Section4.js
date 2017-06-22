import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { Row, Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import P from 'mcs-lite-ui/lib/P';
import B from 'mcs-lite-ui/lib/B';
import A from 'mcs-lite-ui/lib/A';
import Button from 'mcs-lite-ui/lib/Button';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import SpaceTop from '../../components/SpaceTop';
import SectionRow from '../../components/SectionRow';
import imgOpen from '../../statics/images/img_open_source.svg';
import imgOpenCloud from '../../statics/images/img_open_source_cloud.svg';
import imgOpenCode1 from '../../statics/images/img_open_source_code1.svg';
import imgOpenCode2 from '../../statics/images/img_open_source_code2.svg';
import imgOpenCode3 from '../../statics/images/img_open_source_code3.svg';
import imgCustomization from '../../statics/images/img_customization.svg';
import imgCustomizationCard from '../../statics/images/img_customization_card.svg';
import imgCustomizationCode from '../../statics/images/img_customization_code.svg';
import imgCustomizationSearch from '../../statics/images/img_customization_search.svg';
import imgCustomizationTooltip from '../../statics/images/img_customization_tooltip.svg';

const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FDFDFD 47%, #FAFAFA 100%);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 385px;

  > ${A} {

    /* Flexbox column align self to bottom trick ref: https://goo.gl/oqMFju */
    margin-top: auto;
    align-self: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 170px;

  > * {
    position: absolute;
    left: 0;
    right: 0;
  }
`;

const ScrollParallaxCode = styled(ScrollParallax)`
  transform-origin: center bottom;
`;

const Background = styled.div`
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
`;

const Section4 = ({ getMessages: t }) =>
  <StyledSectionRow>
    <Column xs={12}>
      <TextCenter>
        <Heading level={2}>{t('title')}</Heading>
      </TextCenter>
    </Column>

    <Row>
      <Column xs={12} sm={6}>
        <CardWrapper>
          <ImageWrapper>
            <Background src={imgOpen} />
            <div>
              <ScrollParallaxCode
                animation={{
                  x: -40,
                  y: 35,
                  rotate: -15,
                  playScale: [0.1, 0.4],
                }}
                style={{ transform: 'translate(-30px, 30px) rotate(0deg)' }}
                component="img"
                src={imgOpenCode1}
                alt="code1"
              />
            </div>
            <div>
              <ScrollParallaxCode
                animation={{ x: 40, y: 35, rotate: 15, playScale: [0.1, 0.4] }}
                style={{ transform: 'translate(30px, 30px) rotate(0deg)' }}
                component="img"
                src={imgOpenCode3}
                alt="code3"
              />
            </div>
            <div>
              <ScrollParallaxCode
                animation={{ y: 20, playScale: [0.1, 0.4] }}
                style={{ transform: 'translateY(25px)' }}
                component="img"
                src={imgOpenCode2}
                alt="code2"
              />
            </div>
            <div>
              <ScrollParallax
                animation={{ y: 20, playScale: [0, 0.4] }}
                style={{ transform: 'translateY(0px)' }}
                component="img"
                src={imgOpenCloud}
                alt="cloud"
              />
            </div>
          </ImageWrapper>
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('github.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('github.desc')}</P>
          </SpaceTop>
          <A
            href="https://github.com/MCS-Lite"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button>{t('github.button')}</Button>
          </A>
        </CardWrapper>
      </Column>

      <Column xs={12} sm={6}>
        <CardWrapper>
          <ImageWrapper>
            <Background src={imgCustomization} />
            <div>
              <ScrollParallax
                animation={{
                  x: -105,
                  y: 85,
                  playScale: [0.1, 0.4],
                }}
                style={{ transform: 'translate(-120px, 85px)' }}
                component="img"
                src={imgCustomizationTooltip}
                alt="imgCustomizationTooltip"
              />
            </div>
            <div>
              <ScrollParallax
                animation={{ y: 35, playScale: [0.1, 0.4] }}
                style={{ transform: 'translateY(0px)' }}
                component="img"
                src={imgCustomizationCode}
                alt="imgCustomizationCode"
              />
            </div>
            <div>
              <ScrollParallax
                animation={{ x: 80, y: 22, playScale: [0.1, 0.4] }}
                style={{ transform: 'translate(95px, 5px)' }}
                component="img"
                src={imgCustomizationCard}
                alt="imgCustomizationCard"
              />
            </div>
            <div>
              <ScrollParallax
                animation={{ x: 70, y: 125, playScale: [0.1, 0.4] }}
                style={{ transform: 'translate(70px, 140px)' }}
                component="img"
                src={imgCustomizationSearch}
                alt="imgCustomizationSearch"
              />
            </div>
          </ImageWrapper>
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('custom.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('custom.desc')}</P>
          </SpaceTop>
          <A
            href="https://github.com/MCS-Lite/cra-boilerplate"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button>{t('custom.button')}</Button>
          </A>
        </CardWrapper>
      </Column>
    </Row>
  </StyledSectionRow>;

Section4.displayName = 'Section4';
Section4.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section4;
