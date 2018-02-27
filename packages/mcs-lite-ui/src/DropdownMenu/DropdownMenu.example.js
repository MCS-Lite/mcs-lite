// @flow
import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import IconFold from 'mcs-lite-icon/lib/IconFold';
import DropdownMenu from './DropdownMenu';
import MenuItem from '../Menu/MenuItem';
import Rotate from '../Rotate';
import { StyledButton } from './styled-components';
import { BOTTOM_RIGHT, BOTTOM_LEFT } from './position.config';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 300px;

  > * {
    margin-bottom: 30px;
  }
`;

storiesOf('DropdownMenu', module)
  .add(
    'default',
    withInfo({
      text: 'BOTTOM_RIGHT',
      inline: true,
    })(() => (
      <DropdownMenu
        itemRenderer={() => (
          <React.Fragment>
            <MenuItem onClick={action('Edit close')}>Edit</MenuItem>
            <MenuItem onClick={action('Delete close')}>Delete</MenuItem>
          </React.Fragment>
        )}
      >
        <div>Click me</div>
      </DropdownMenu>
    )),
  )
  .add(
    'With position',
    withInfo({
      text: `
~~~js
import {
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
} from 'mcs-lite-ui/lib/DropdownMenu/position.config';
~~~
`,
      inline: true,
    })(() => (
      <Wrapper>
        <DropdownMenu
          itemRenderer={() => (
            <React.Fragment>
              <MenuItem onClick={action('Edit close')}>Edit</MenuItem>
              <MenuItem onClick={action('Delete close')}>Delete</MenuItem>
            </React.Fragment>
          )}
          position={BOTTOM_RIGHT}
        >
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_RIGHT</div>
        </DropdownMenu>

        <DropdownMenu
          itemRenderer={() => (
            <React.Fragment>
              <MenuItem onClick={action('Edit close')}>Edit</MenuItem>
              <MenuItem onClick={action('Delete close')}>Delete</MenuItem>
            </React.Fragment>
          )}
          position={BOTTOM_LEFT}
        >
          <div style={{ backgroundColor: 'skyblue' }}>BOTTOM_LEFT</div>
        </DropdownMenu>
      </Wrapper>
    )),
  )
  .add(
    '[itemRenderer] With close',
    withInfo({
      text: `
~~~js
<DropdownMenu
  itemRenderer={({ close }) => (
    <React.Fragment>
      <MenuItem onClick={close}>Edit</MenuItem>
      <MenuItem onClick={close}>Delete</MenuItem>
    </React.Fragment>
  )}
>
  <div>Click me</div>
</DropdownMenu>
~~~
      `,
      inline: true,
    })(() => (
      <DropdownMenu
        position={BOTTOM_LEFT}
        itemRenderer={({ close }) => (
          <React.Fragment>
            <MenuItem onClick={close}>Edit</MenuItem>
            <MenuItem onClick={close}>Delete</MenuItem>
          </React.Fragment>
        )}
      >
        <div>Click me</div>
      </DropdownMenu>
    )),
  )
  .add(
    '[children] With isOpen',
    withInfo({
      text: `
~~~js
<DropdownMenu
  itemRenderer={() => ()}
>
  {({ isOpen }) => (
    <StyledButton active={isOpen}>
      Edit
    </StyledButton>
  )}
</DropdownMenu>
~~~
      `,
      inline: true,
    })(() => (
      <DropdownMenu
        itemRenderer={({ close }) => (
          <React.Fragment>
            <MenuItem onClick={close}>Scene</MenuItem>
            <MenuItem onClick={close} active>
              User privileges
            </MenuItem>
          </React.Fragment>
        )}
      >
        {({ isOpen }) => (
          <StyledButton active={isOpen} style={{ marginLeft: 100 }}>
            Edit
            <Rotate active={isOpen}>
              <IconFold />
            </Rotate>
          </StyledButton>
        )}
      </DropdownMenu>
    )),
  )
  .add(
    '[children] With open',
    withInfo({
      text: `
~~~js
<DropdownMenu
  itemRenderer={() => ()}
>
  {({ open }) => (
    <StyledButton
      onMouseOver={open}
    >
      Edit
    </StyledButton>
  )}
</DropdownMenu>
~~~
      `,
      inline: true,
    })(() => (
      <DropdownMenu
        itemRenderer={({ close }) => (
          <React.Fragment>
            <MenuItem onClick={close}>Scene</MenuItem>
            <MenuItem onClick={close} active>
              User privileges
            </MenuItem>
          </React.Fragment>
        )}
      >
        {({ isOpen, open }) => (
          <StyledButton
            active={isOpen}
            style={{ marginLeft: 100 }}
            onMouseEnter={open}
          >
            Edit <IconFold />
          </StyledButton>
        )}
      </DropdownMenu>
    )),
  );
