import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconMenu } from 'mcs-lite-icon';
import { LandingHeader, Nav, NavItem, NavItemDropdown } from '.';

storiesOf('LandingHeader', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <LandingHeader>
        <div>
          Content
        </div>
      </LandingHeader>,
    { inline: true },
  )
  .addWithInfo(
    'With offset props',
    'The `scrollTop` value of the document/window to get the shadow style.',
    () =>
      <LandingHeader offset={160}>
        offset 160
      </LandingHeader>,
    { inline: true },
  )
  .addWithInfo(
    'With Nav and NavItem',
    'icon',
    () =>
      <LandingHeader>
        <Nav>
          <NavItem><IconMenu size={24} /></NavItem>
          <NavItem>Nav Item 1</NavItem>
          <NavItem active>Nav Item 2 (active)</NavItem>
        </Nav>
      </LandingHeader>,
    { inline: true },
  )
  .addWithInfo(
    'With NavItemDropdown',
    '',
    () =>
      <LandingHeader>
        <Nav>
          <NavItemDropdown
            items={[
              { key: 1, children: <div>1</div> },
              { key: 2, component: 'a', children: <div>2</div> },
            ]}
          >
            Language
          </NavItemDropdown>
        </Nav>
      </LandingHeader>,
    { inline: true },
  );
