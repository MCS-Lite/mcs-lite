import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { IconMenu } from 'mcs-lite-icon';
import { LandingHeader, Nav, NavItem, NavItemDropdown, NavItemBurger } from '.';

storiesOf('LandingHeader', module)
  .add(
    'API',
    withInfo({
      text: '',
      inline: true,
    })(() =>
      <LandingHeader>
        <div>
          Content
        </div>
      </LandingHeader>,
    ),
  )
  .add(
    'With offset props',
    withInfo({
      text:
        'The **scrollTop** value of the document/window to get the shadow style.',
      inline: true,
    })(() =>
      <LandingHeader offset={160}>
        offset 160
      </LandingHeader>,
    ),
  )
  .add(
    'With Nav and NavItem',
    withInfo({
      text: 'icon',
      inline: true,
    })(() =>
      <LandingHeader>
        <Nav>
          <NavItem><IconMenu size={24} /></NavItem>
          <NavItem>Nav Item 1</NavItem>
          <NavItem active>Nav Item 2 (active)</NavItem>
          <NavItem disabled>Nav Item 3 (disabled)</NavItem>
        </Nav>
      </LandingHeader>,
    ),
  )
  .add(
    'NavItemDropdown',
    withInfo({
      text: 'items = <MenuItem>',
      inline: true,
    })(() =>
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
    ),
  )
  .add(
    'NavItemBurger',
    withInfo({
      text: 'items = <NavItem>',
      inline: true,
    })(() =>
      <LandingHeader>
        <Nav>
          <NavItemBurger
            items={[
              { key: 1, component: 'a', children: 'Link 1' },
              {
                key: 2,
                children: <div>Not Link 2 (Disabled)</div>,
                disabled: true,
              },
              { key: 3, component: 'a', children: 'Link 3' },
              { key: 4, component: 'a', children: 'Link 4' },
            ]}
          >
            children
          </NavItemBurger>
        </Nav>
      </LandingHeader>,
    ),
  );
