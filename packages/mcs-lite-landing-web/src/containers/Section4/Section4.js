import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Column } from 'hedron';
import Heading from 'mcs-lite-ui/lib/Heading';
import P from 'mcs-lite-ui/lib/P';
import B from 'mcs-lite-ui/lib/B';
import Button from 'mcs-lite-ui/lib/Button';
import TextCenter from '../../components/TextCenter';
import SpaceTop from '../../components/SpaceTop';
import SectionRow from '../../components/SectionRow';
import license from '../../statics/images/license.svg';

const StyledSectionRow = styled(SectionRow)`
  background-image:
    linear-gradient(-180deg, #FFFFFF 0%, #FDFDFD 47%, #FAFAFA 100%);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 385px;

  > ${Button} {
    /* Flexbox column align self to bottom trick ref: https://goo.gl/oqMFju */
    margin-top: auto;
    align-self: center;
  }
`;

const Section4 = ({ getMessages: t }) =>
  <StyledSectionRow>
    <Column xs={12}>
      <TextCenter>
        <Heading level={2}>{t('title')}</Heading>
      </TextCenter>
    </Column>

    <Row>
      <Column xs={6}>
        <CardWrapper>
          <img src={license} alt="license" />
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('github.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('github.desc')}</P>
          </SpaceTop>
          <Button>{t('github.button')}</Button>
        </CardWrapper>
      </Column>

      <Column xs={6}>
        <CardWrapper>
          <img src={license} alt="license" />
          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t('custom.title')}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t('custom.desc')}</P>
          </SpaceTop>
          <Button>{t('custom.button')}</Button>
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
