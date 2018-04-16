// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import IconAvatar from './IconAvatar';
import Wrapper from './styled-components';

type Props = {
  src?: string,
  size?: number,
};

function PureAvatar({ src, size }: Props) {
  return (
    <Wrapper>
      {src ? (
        <img alt="" src={src} width={size} height={size} />
      ) : (
        <IconAvatar width={size} height={size} />
      )}
    </Wrapper>
  );
}

const Avatar: React.ComponentType<Props> = pure(PureAvatar);
Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  size: '30',
};
Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
};

export default Avatar;
