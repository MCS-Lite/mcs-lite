// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import IconGoDown from 'mcs-lite-icon/lib/IconGoDown';
import Rotate from '.';

const IconWrapper = styled.div`
  display: inline-block;
  color: ${props => props.theme.color.primary};
  font-size: 24px;
  cursor: pointer;
`;

class StatefulRotate extends React.Component<any, { isActive: boolean }> {
  state = { isActive: false };
  onClick = () => this.setState(({ isActive }) => ({ isActive: !isActive }));
  render() {
    const { isActive } = this.state;
    const { onClick } = this;

    return (
      <IconWrapper>
        <Rotate active={isActive} onClick={onClick} {...this.props} />
      </IconWrapper>
    );
  }
}

storiesOf('Rotate', module)
  .add(
    'API',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <IconWrapper>
        <Rotate>
          <IconFold />
        </Rotate>
      </IconWrapper>
    )),
  )
  .add(
    'With active props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <IconWrapper>
        <Rotate active>
          <IconFold />
        </Rotate>
      </IconWrapper>
    )),
  )
  .add(
    'With state',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <StatefulRotate>
        <IconFold />
      </StatefulRotate>
    )),
  )
  .add(
    'With other icon',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <StatefulRotate>
        <IconGoDown />
      </StatefulRotate>
    )),
  );
