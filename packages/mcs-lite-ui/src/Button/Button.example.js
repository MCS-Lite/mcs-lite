import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('Default button (primary)', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('Cancel Button', () => (
    <Button onClick={action('clicked')} kind="cancel">cancel</Button>
  ));
