import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import P from 'mcs-lite-ui/lib/P';
import getCurrentYear from '../../utils/getCurrentYear';

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.black};
  text-align: center;
  padding: 6px 0;
`;

const YEAR = getCurrentYear();

const Footer = ({ getMessages: t }) =>
  <Wrapper>
    <P color="white">© {YEAR} {t('desc')}</P>
  </Wrapper>;

Footer.displayName = 'Footer';
Footer.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Footer;
