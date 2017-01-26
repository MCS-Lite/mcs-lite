import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styled from 'styled-components';
import { IconTrashO } from 'mcs-lite-icon';
import { MenuItem, Menu } from '.';
import Heading from '../Heading';
import P from '../P';
import A from '../A';
import B from '../B';

const StyledMenu = styled(Menu)`
  width: 300px;
`;

storiesOf('Menu', module)
  .addWithInfo(
    'API for MenuItem',
    '',
    () => <MenuItem>MenuItem</MenuItem>,
    { inline: true },
  )
  .addWithInfo(
    'API for Menu',
    '',
    () => <Menu>Children</Menu>,
    { inline: true },
  )

  .addWithInfo(
    'Combination',
    'With fixed width',
    () =>
      <StyledMenu>
        <MenuItem onClick={action('1')}>MenuItem 1</MenuItem>
        <MenuItem onClick={action('2')}>MenuItem Content 2</MenuItem>
        <MenuItem onClick={action('3')}><Heading>MenuItem Heading 1</Heading></MenuItem>
        <MenuItem onClick={action('4')}><P>MenuItem P</P></MenuItem>
        <MenuItem onClick={action('5')}><P color="error">MenuItem P error</P></MenuItem>
        <MenuItem onClick={action('6')}><A>MenuItem A</A></MenuItem>
        <MenuItem onClick={action('7')}><B>MenuItem B</B></MenuItem>
        <MenuItem onClick={action('8')}><IconTrashO /></MenuItem>
      </StyledMenu>,
    { inline: true },
  );
