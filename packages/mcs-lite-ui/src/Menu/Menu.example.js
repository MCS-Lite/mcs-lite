import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import { IconDelete } from 'mcs-lite-icon';
import { MenuItem, Menu } from '.';
import Heading from '../Heading';
import P from '../P';
import A from '../A';
import B from '../B';

const StyledMenu = styled(Menu)`
  width: 300px;
`;

storiesOf('Menu', module)
  .add(
    'API for MenuItem',
    withInfo({
      text: '',
      inline: true,
    })(() =>
      <div>
        <MenuItem>div tag (default)</MenuItem>
        <MenuItem component="a">a Tag</MenuItem>
      </div>,
    ),
  )
  .add(
    'API for Menu',
    withInfo({
      text: '',
      inline: true,
    })(() => <Menu>Children</Menu>),
  )
  .add(
    'Min width',
    withInfo({
      text: 'min-width: 80px',
      inline: true,
    })(() =>
      <Menu>
        <MenuItem onClick={action('index: 1')}>複製</MenuItem>
        <MenuItem onClick={action('index: 1')}>刪除</MenuItem>
      </Menu>,
    ),
  )
  .add(
    'Fixed width',
    withInfo({
      text: 'With fixed width',
      inline: true,
    })(() =>
      <StyledMenu>
        <MenuItem onClick={action('index: 1')}>MenuItem 1</MenuItem>
        <MenuItem onClick={action('index: 2')}>MenuItem Content 2</MenuItem>
        <MenuItem onClick={action('index: 3')}>
          <Heading>MenuItem Heading 1</Heading>
        </MenuItem>
        <MenuItem onClick={action('index: 4')}><P>MenuItem P</P></MenuItem>
        <MenuItem onClick={action('index: 5')}>
          <P color="error">MenuItem P error</P>
        </MenuItem>
        <MenuItem onClick={action('index: 6')}><A>MenuItem A</A></MenuItem>
        <MenuItem onClick={action('index: 7')}><B>MenuItem B</B></MenuItem>
        <MenuItem onClick={action('index: 8')}><IconDelete /></MenuItem>
        <MenuItem component="a">{`<a>`} Tag</MenuItem>
      </StyledMenu>,
    ),
  );
