// @flow
import * as React from 'react';
import Transition from 'react-overlay-pack/lib/Transition/index';
import P from '../P';

const ErrorMessage = ({ children }: { children: React.Node }) => (
  <Transition
    component={false}
    style={{
      transform: 'translateX(6px)',
    }}
    animation={{
      translateX: 0,
      ease: 'easeOutQuart',
    }}
  >
    <P color="error">{children}</P>
  </Transition>
);

export default ErrorMessage;
