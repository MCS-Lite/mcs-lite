import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '.';

storiesOf('Table', module).addWithInfo(
  'API',
  '',
  () => (
    <Table style={{ backgroundColor: 'white' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>1</th>
          <td>Michael</td>
          <td>Hsu</td>
          <td>@evenchange4</td>
        </tr>
      </tbody>
    </Table>
  ),
  { inline: true },
);
