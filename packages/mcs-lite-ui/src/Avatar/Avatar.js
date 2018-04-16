// @flow
import * as React from 'react';
import { compose, pure } from 'recompose';
import IconAvatar from './IconAvatar';
import Wrapper from './styled-components';

type Props = {
  src?: string,
  size?: number,
};

const PureAvatar = ({ src, size = 30 }: Props) => (
  <Wrapper>
    {src ? (
      <img alt="" src={src} width={size} height={size} />
    ) : (
      <IconAvatar width={size} height={size} />
    )}
  </Wrapper>
);

const enhance = compose(pure);
const Avatar: React.ComponentType<Props> = enhance(PureAvatar);
Avatar.displayName = 'Avatar';

export default Avatar;
