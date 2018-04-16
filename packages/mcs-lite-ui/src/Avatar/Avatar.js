// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import IconAvatar from './IconAvatar';
import Wrapper from './styled-components';

type Props = {
  src?: string,
  size?: number,
};

function Avatar({ src, size }: Props) {
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

Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  size: 30,
};
Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;
