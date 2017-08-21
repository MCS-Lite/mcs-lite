import React from 'react';
import R from 'ramda';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import Table, { TABLE_HEIGHT_OFFSET } from '../Table';

jest.mock('react-virtualized', () => ({
  WindowScroller: ({ children }) => children({ height: 100 }),
  AutoSizer: ({ children }) => children({ width: 100 }),
  Column: ({ children }) => <div>{children}</div>, // eslint-disable-line
  Table: ({ children }) => <div>{children}</div>, // eslint-disable-line
}));

it('should return TABLE_HEIGHT_OFFSET', () => {
  expect(TABLE_HEIGHT_OFFSET).toBe(200);
});

it('should renders <Table> with data', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Table
        getMessages={R.identity}
        data={[
          {
            userId: 'user1',
            email: 'email1',
            userName: 'userName1',
          },
          {
            userId: 'user2',
            email: 'email2',
            userName: 'userName2',
          },
        ]}
        checkedList={[]}
        onCheckedListChange={() => {}}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
