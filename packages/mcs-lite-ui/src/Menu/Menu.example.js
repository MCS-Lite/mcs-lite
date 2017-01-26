import React from 'react';
import { storiesOf } from '@kadira/storybook';
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
        <MenuItem>MenuItem 1</MenuItem>
        <MenuItem>MenuItem Content 2</MenuItem>
        <MenuItem><Heading>MenuItem Heading 1</Heading></MenuItem>
        <MenuItem><P>MenuItem P</P></MenuItem>
        <MenuItem><P color="error">MenuItem P error</P></MenuItem>
        <MenuItem><A>MenuItem A</A></MenuItem>
        <MenuItem><B>MenuItem B</B></MenuItem>
        <MenuItem><IconTrashO /></MenuItem>
      </StyledMenu>,
    { inline: true },
  );
