import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';

const MockProvider = ({ children }) =>
  <IntlProvider messages={{}} locale="en">
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </IntlProvider>;

MockProvider.propTypes = {
  children: PropTypes.node,
};

export default MockProvider;
