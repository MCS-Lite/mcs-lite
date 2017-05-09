import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Toast as MLToast } from 'mcs-lite-ui';
import Transition from 'react-motion-ui-pack';
import Portal from 'react-overlays/lib/Portal';
import { HeightContainer, ToastContainer, Fixed } from './styled-components';

const Ip = ({ toasts, children, getMessages: t }) => (
  <div style={{ height: 800, backgroundColor: 'skyblue' }}>
    Ip
  </div>
);

Ip.displayName = 'Ip';
Ip.propTypes = {
  // Redux State
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      kind: PropTypes.string.isRequired,
      children: PropTypes.any.isRequired,
    }),
  ).isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default Ip;
