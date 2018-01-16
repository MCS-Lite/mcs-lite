import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Label from '../Label';
import Input from '../Input';
import FormGroup from '.';

storiesOf('FormGroup', module).add(
  'API',
  withInfo({
    text: 'default',
    inline: true,
  })(() => (
    <FormGroup>
      <Label htmlFor="1" required>
        Label 1
      </Label>
      <Input type="text" id="1" placeholder="placeholder 1" />

      <Label htmlFor="2">Label 2</Label>
      <Input type="text" id="2" placeholder="placeholder 2" />
    </FormGroup>
  )),
);
