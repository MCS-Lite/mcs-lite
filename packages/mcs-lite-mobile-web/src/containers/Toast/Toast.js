import React, { PropTypes } from 'react';
import { Toast as MLToast } from 'mcs-lite-ui';
import Transition from 'react-motion-ui-pack';
import Portal from 'react-overlays/lib/Portal';
import { HeightContainer, ToastContainer, Fixed } from './styled-components';

const Toast = ({ toasts, children }) =>
  <HeightContainer>
    <HeightContainer>{children}</HeightContainer>

    {toasts.length > 0 && (
      <Portal>
        <Fixed>
          <Transition
            component={ToastContainer}
            appear={{ opacity: 0.8, translateY: -20 }}
            enter={{ opacity: 1, translateY: 0 }}
          >
            {toasts.map(t => <MLToast key={t.key} {...t} />)}
          </Transition>
        </Fixed>
      </Portal>
    )}
  </HeightContainer>;

Toast.displayName = 'Toast';
Toast.propTypes = {
  toasts: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  })),
};
Toast.defaultProps = {
  toasts: [],
};

export default Toast;
