// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Label from '../Label';
import Input from '../Input';
import { Form, Fieldset, ResponsivePanel, ErrorMessage } from './';

storiesOf('Form', module)
  .add(
    'Fieldset',
    withInfo({
      text: 'default',
      inline: true,
    })(() => (
      <React.Fragment>
        <Fieldset>
          <div style={{ backgroundColor: 'antiquewhite' }}>Label Component</div>
          <div style={{ backgroundColor: 'aliceblue' }}>Input Component</div>
        </Fieldset>

        <br />

        <Fieldset>
          <div style={{ backgroundColor: 'antiquewhite' }}>
            <Label>Device name</Label>
          </div>
          <div style={{ backgroundColor: 'aliceblue' }}>
            <Input placeholder="input the display name" />
          </div>
        </Fieldset>

        <br />

        <Fieldset>
          <Label htmlFor="scene" required>
            Scene name
          </Label>
          <div>
            <Input
              id="scene"
              placeholder="input the scene name"
              kind="error"
              focus
            />
            <ErrorMessage>Please input the scene name</ErrorMessage>
          </div>
        </Fieldset>

        <br />

        <Fieldset>
          <div>
            <Label htmlFor="scene2" required>
              Scene name long label
            </Label>
          </div>
          <div>
            <Input
              id="scene2"
              placeholder="input the scene name"
              kind="error"
              focus
            />
            <ErrorMessage>Please input the scene name</ErrorMessage>
          </div>
        </Fieldset>
      </React.Fragment>
    )),
  )
  .add(
    'Form',
    withInfo({
      text: 'default',
      inline: true,
    })(() => (
      <Form style={{ backgroundColor: 'aliceblue' }}>
        <Fieldset>
          <div>
            <Label>Device name</Label>
          </div>
          <div>
            <Input placeholder="input the display name" />
          </div>
        </Fieldset>

        <Fieldset>
          <Label htmlFor="scene" required>
            Scene name
          </Label>
          <div>
            <Input
              id="scene"
              placeholder="input the scene name"
              kind="error"
              focus
            />
            <ErrorMessage>Please input the scene name</ErrorMessage>
          </div>
        </Fieldset>
      </Form>
    )),
  )
  .add(
    'ResponsivePanel',
    withInfo({
      text: 'default',
      inline: true,
    })(() => (
      <ResponsivePanel style={{ backgroundColor: 'aliceblue' }}>
        <header>Add scene</header>
        <main>
          <Form>
            <Fieldset>
              <div>
                <Label>Device name</Label>
              </div>
              <div>
                <Input placeholder="input the display name" />
              </div>
            </Fieldset>

            <Fieldset>
              <Label htmlFor="scene" required>
                Scene name
              </Label>
              <div>
                <Input
                  id="scene"
                  placeholder="input the scene name"
                  kind="error"
                  focus
                />
                <ErrorMessage>Please input the scene name</ErrorMessage>
              </div>
            </Fieldset>
          </Form>
        </main>
      </ResponsivePanel>
    )),
  );
