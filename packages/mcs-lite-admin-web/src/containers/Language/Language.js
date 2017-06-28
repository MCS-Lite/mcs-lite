import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'react-router';
import { updateLocale } from 'mcs-lite-ui/lib/utils/routerHelper';
import { LOCALES } from 'mcs-lite-ui/lib/utils/localeHelper';
import DashboardTitle from '../../components/DashboardTitle';
import DashboardDesc from '../../components/DashboardDesc';

const Wrapper = styled.div`
  > * {
    margin-right: 10px;
  }

  input {
    margin-right: 5px;

    /* fix for click radio */
    pointer-events: none;
  }

  * {
    color: ${props => props.theme.color.grayBase};
    text-decoration: none;
  }
`;

const Language = ({ locale, getMessages: t }) =>
  <div>
    <Helmet><title>{t('switch')}</title></Helmet>
    <DashboardTitle title={t('switch')} />
    <DashboardDesc>{t('select')}</DashboardDesc>

    <Wrapper>
      {LOCALES.map(({ id, children }) =>
        <Link key={id} to={updateLocale(id)}>
          <input type="radio" value={id} checked={id === locale} readOnly />
          {children}
        </Link>,
      )}
    </Wrapper>
  </div>;

Language.displayName = 'Language';
Language.propTypes = {
  // Redux State
  locale: PropTypes.string,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Language;
