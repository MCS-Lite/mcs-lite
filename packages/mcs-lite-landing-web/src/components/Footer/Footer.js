import React from 'react';
import PropTypes from 'prop-types';
import { Page, Row } from 'hedron';
import P from 'mcs-lite-ui/lib/P';
import getCurrentYear from 'mcs-lite-ui/lib/utils/getCurrentYear';
import { PAGE_WIDTH } from '../../components/SectionRow/SectionRow';
import {
  Container,
  StyledColumn,
  IconWrapper,
  RWDWrapper,
} from './styled-components';
import SVGFacebook from './SVGFacebook';
import SVGGitHub from './SVGGitHub';

const Footer = ({ getMessages: t }) =>
  <Container>
    <Page width={`${PAGE_WIDTH}px`}>
      <Row>
        <StyledColumn xs={12}>
          <RWDWrapper>
            <P color="white">© {getCurrentYear()} {t('desc')}</P>
            <IconWrapper>
              <a
                href="https://www.facebook.com/groups/1651382875112603"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SVGFacebook />
              </a>
              <a
                href="https://github.com/MCS-Lite"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SVGGitHub />
              </a>
            </IconWrapper>
          </RWDWrapper>
        </StyledColumn>
      </Row>
    </Page>
  </Container>;

Footer.displayName = 'Footer';
Footer.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Footer;
