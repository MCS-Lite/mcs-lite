import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import B from 'mcs-lite-ui/lib/B';
import P from 'mcs-lite-ui/lib/P';
import SectionRow from '../../components/SectionRow';
import SpaceTop from '../../components/SpaceTop';
import TextCenter from '../../components/TextCenter';
import iconData from '../../statics/images/icon_data.svg';

const Section3 = ({ getMessages: t }) =>
  <SectionRow>
    <Column xs={12}>
      <TextCenter>
        <Heading level={2}>{t('title')}</Heading>
        <SpaceTop height={10}>
          <Heading level={4} color="grayBase">{t('desc')}</Heading>
        </SpaceTop>
      </TextCenter>
    </Column>

    <Row>
      <Column xs={6} sm={3}>
        <TextCenter>
          <img src={iconData} alt="data" />
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('data.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('data.desc')}</P>
          </SpaceTop>
        </TextCenter>
      </Column>

      <Column xs={6} sm={3}>
        <TextCenter>
          <img src={iconData} alt="remote" />
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('remote.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('remote.desc')}</P>
          </SpaceTop>
        </TextCenter>
      </Column>

      <Column xs={6} sm={3}>
        <TextCenter>
          <img src={iconData} alt="management" />
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('management.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('management.desc')}</P>
          </SpaceTop>
        </TextCenter>
      </Column>

      <Column xs={6} sm={3}>
        <TextCenter>
          <img src={iconData} alt="mobile" />
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('mobile.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('mobile.desc')}</P>
          </SpaceTop>
        </TextCenter>
      </Column>
    </Row>
  </SectionRow>;

Section3.displayName = 'Section3';
Section3.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Section3;
