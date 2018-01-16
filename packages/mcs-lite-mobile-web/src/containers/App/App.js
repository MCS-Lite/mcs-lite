import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import MLToast from 'mcs-lite-ui/lib/Toast';
import Transition from 'react-motion-ui-pack';
import Portal from 'react-overlays/lib/Portal';
import { HeightContainer, ToastContainer, Fixed } from './styled-components';

const App = ({ toasts, children, getMessages: t }) => (
  <HeightContainer>
    {/* 1. Helmet */}
    <Helmet titleTemplate={`%s | ${t('titleTemplate')}`} />

    {/* 2. Body content */}
    <HeightContainer>{children}</HeightContainer>

    {/* 3. Toasts */}
    {toasts.length > 0 && (
      <Portal>
        <Fixed>
          <Transition
            component={ToastContainer}
            appear={{ opacity: 0.8, translateY: -20 }}
            enter={{ opacity: 1, translateY: 0 }}
          >
            {toasts.map(({ key, kind, children: toastChildren }) => (
              <MLToast key={key} kind={kind}>
                {kind === 'error' && t('gerenalError')}
                {toastChildren}
              </MLToast>
            ))}
          </Transition>
        </Fixed>
      </Portal>
    )}
  </HeightContainer>
);

App.displayName = 'App';
App.propTypes = {
  children: PropTypes.node.isRequired,

  // Redux State
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      kind: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    }),
  ).isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default App;
