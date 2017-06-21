import React from 'react';
import PropTypes from 'prop-types';
import { Page, Row } from 'hedron';
import P from 'mcs-lite-ui/lib/P';
import { PAGE_WIDTH } from '../../components/SectionRow/SectionRow';
import getCurrentYear from '../../utils/getCurrentYear';
import iconFacebook from '../../statics/images/icon_facebook.svg';
import iconGitHub from '../../statics/images/icon_github.svg';
import {
  Container,
  StyledColumn,
  IconWrapper,
  RWDWrapper,
} from './styled-components';

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
                <img
                  src={iconFacebook}
                  title="MCS 台灣使用者討論社團"
                  alt="MCS 台灣使用者討論社團"
                />
              </a>
              <a
                href="https://github.com/MCS-Lite"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={iconGitHub}
                  title="MCS Lite GitHub"
                  alt="MCS Lite GitHub"
                />
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
