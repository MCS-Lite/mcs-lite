import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from 'react-overlays/lib/Portal';
import Transition from 'react-motion-ui-pack';
import ClickOutside from '../ClickOutside';
import emptyFunction from '../utils/emptyFunction';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;

const Dialog = ({ onHide, show, children, ...otherProps }) =>
  show &&
  <Portal>
    <Transition
      component={false}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0.5 }}
    >
      <Overlay key="dialog" {...otherProps}>
        <ClickOutside onClick={onHide}>
          {children}
        </ClickOutside>
      </Overlay>
    </Transition>
  </Portal>;

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
};
Dialog.defaultProps = {
  onHide: emptyFunction,
};

export default Dialog;
