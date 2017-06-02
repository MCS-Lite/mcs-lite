import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import TopBarProgress from 'react-topbar-progress-indicator';
import MLToast from 'mcs-lite-ui/lib/Toast';
import Transition from 'react-motion-ui-pack';
import Portal from 'react-overlays/lib/Portal';
import { HeightContainer, ToastContainer, Fixed } from './styled-components';

// Setup default config
TopBarProgress.config({
  barThickness: 4,
  barColors: {
    '0': '#00A1DE',
    '1.0': '#00A1DE',
  },
  shadowBlur: 5,
  shadowColor: 'rgba(0, 0, 0, 0.2)',
});

const App = ({ toasts, isLoading, children, getMessages: t }) => (
  <HeightContainer>
    {/* 1. Helmet */}
    <Helmet titleTemplate={`%s | ${t('titleTemplate')}`} />

    {/* 2. Body content */}
    <HeightContainer>{children}</HeightContainer>

    {/* 3. TopBarProgress && Toasts */}
    {isLoading && <TopBarProgress />}
    {toasts.length > 0 &&
      <Portal>
        <Fixed>
          <Transition
            component={ToastContainer}
            appear={{ opacity: 0.8, translateY: -20 }}
            enter={{ opacity: 1, translateY: 0 }}
          >
            {toasts.map(toast => <MLToast key={toast.key} {...toast} />)}
          </Transition>
        </Fixed>
      </Portal>}
  </HeightContainer>
);

App.displayName = 'App';
App.propTypes = {
  children: PropTypes.any.isRequired,

  // Redux State
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      kind: PropTypes.string.isRequired,
      children: PropTypes.any.isRequired,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default App;
