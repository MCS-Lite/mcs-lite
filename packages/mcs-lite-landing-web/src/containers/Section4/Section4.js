import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import P from 'mcs-lite-ui/lib/P';
import B from 'mcs-lite-ui/lib/B';
import A from 'mcs-lite-ui/lib/A';
import Button from 'mcs-lite-ui/lib/Button';
import TextCenter from '../../components/TextCenter';
import SpaceTop from '../../components/SpaceTop';
import SectionRow from '../../components/SectionRow';
import imgOpen from '../../statics/images/img_open_source.svg';
import imgCustomization from '../../statics/images/img_customization.svg';

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

const StyledImg = styled.img`
  max-width: 100%;
  padding: 10px 30px;
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
          <StyledImg
            src={imgOpen}
            title={t('github.title')}
            alt={t('github.desc')}
          />
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
          <StyledImg
            src={imgCustomization}
            title={t('custom.title')}
            alt={t('custom.desc')}
          />
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
