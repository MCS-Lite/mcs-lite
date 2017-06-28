import React from 'react';
import PropTypes from 'prop-types';
import { Page, Row } from 'hedron';
import Loadable from 'react-loadable';
import P from 'mcs-lite-ui/lib/P';
import A from 'mcs-lite-ui/lib/A';
import LazyloadOnce from 'mcs-lite-ui/lib/LazyloadOnce';
import getCurrentYear from 'mcs-lite-ui/lib/utils/getCurrentYear';
import { PAGE_WIDTH } from '../../components/SectionRow/SectionRow';
import {
  Container,
  StyledColumn,
  IconWrapper,
  FakeIcon,
  RWDWrapper,
} from './styled-components';

const HEIGHT = 32;
const LoadableSVGFacebook = Loadable({
  loader: () => import(/* webpackChunkName: "Footer" */ '../SVG/SVGFacebook'),
  loading: () => <FakeIcon>Facebook</FakeIcon>,
});
const LoadableSVGGitHub = Loadable({
  loader: () => import(/* webpackChunkName: "Footer" */ '../SVG/SVGGitHub'),
  loading: () => <FakeIcon>GitHub</FakeIcon>,
});

const Footer = ({ getMessages: t }) =>
  <Container>
    <Page width={`${PAGE_WIDTH}px`}>
      <Row>
        <StyledColumn xs={12}>
          <RWDWrapper>
            <P color="white">© {getCurrentYear()} {t('desc')}</P>
            <IconWrapper>
              <A
                href="https://www.facebook.com/groups/1651382875112603"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LazyloadOnce height={HEIGHT}>
                  <LoadableSVGFacebook />
                </LazyloadOnce>
              </A>
              <A
                href="https://github.com/MCS-Lite"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LazyloadOnce height={HEIGHT}>
                  <LoadableSVGGitHub />
                </LazyloadOnce>
              </A>
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
