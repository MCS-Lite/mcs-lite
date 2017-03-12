import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Toast as MLToast } from 'mcs-lite-ui';
import Transition from 'react-motion-ui-pack';
import Portal from 'react-overlays/lib/Portal';
import { HeightContainer, ToastContainer, Fixed } from './styled-components';

const App = ({ toasts, children, getMessages: t }) =>
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
            {toasts.map(toast => <MLToast key={toast.key} {...toast} />)}
          </Transition>
        </Fixed>
      </Portal>
    )}
  </HeightContainer>;

App.displayName = 'App';
App.propTypes = {
  // Redux State
  toasts: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  })).isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default App;
