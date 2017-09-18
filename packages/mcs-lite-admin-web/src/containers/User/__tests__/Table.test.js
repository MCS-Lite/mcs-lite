import React from 'react';
import R from 'ramda';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import Table, {
  TABLE_HEIGHT_OFFSET,
  StyledIcon,
  StyledTable,
  NoRowWrapper,
} from '../Table';

jest.mock('mcs-lite-icon/lib/IconEdit');
jest.mock('react-virtualized', () => ({
  WindowScroller: ({ children }) => children({ height: 100 }),
  AutoSizer: ({ children }) => children({ width: 100 }),
  Column: ({ children }) => <div>{children}</div>, // eslint-disable-line
  Table: ({ children }) => <div>{children}</div>, // eslint-disable-line
  SortDirection: { ASC: 'ASC', DESC: 'DESC' },
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

  expect(toJson(wrapper.find(Table))).toMatchSnapshot();
});

it('should renders styled-components', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <div>
        <StyledIcon />
        <StyledTable />
        <NoRowWrapper />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});

it('should handle check all in checkedHeaderRenderer', () => {
  const mockFn = jest.fn();
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
        onCheckedListChange={mockFn}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();
  const input = table.checkedHeaderRenderer();

  expect(input).toMatchSnapshot();

  // Check all
  input.props.onChange();
  expect(mockFn).toHaveBeenCalledWith(['user1', 'user2']);
});

it('should handle uncheck all in checkedHeaderRenderer', () => {
  const mockFn = jest.fn();
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
        checkedList={['user1', 'user2']}
        onCheckedListChange={mockFn}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();
  const input = table.checkedHeaderRenderer();

  expect(input).toMatchSnapshot();

  // Uncheck all
  input.props.onChange();
  expect(mockFn).toHaveBeenCalledWith([]);
});

it('should handle ckeck item in checkedCellRenderer', () => {
  const mockFn = jest.fn();
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
        onCheckedListChange={mockFn}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();
  const input = table.checkedCellRenderer({
    rowData: {
      userId: 'user1',
      email: 'email1',
      userName: 'userName1',
    },
  });

  expect(input).toMatchSnapshot();

  // ckeck
  input.props.onChange();
  expect(mockFn).toHaveBeenCalledWith(['user1']);
});

it('should handle unckeck item in checkedCellRenderer', () => {
  const mockFn = jest.fn();
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
        checkedList={['user1']}
        onCheckedListChange={mockFn}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();
  const input = table.checkedCellRenderer({
    rowData: {
      userId: 'user1',
      email: 'email1',
      userName: 'userName1',
    },
  });

  expect(input).toMatchSnapshot();

  // Uncheck
  input.props.onChange();
  expect(mockFn).toHaveBeenCalledWith([]);
});

it('should handle onEditClick in editCellRenderer', () => {
  const mockFn = jest.fn();
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Table
        getMessages={R.identity}
        data={[]}
        checkedList={[]}
        onCheckedListChange={() => {}}
        onEditClick={mockFn}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();
  const icon = table.editCellRenderer({
    rowData: {
      userId: 'user1',
      email: 'email1',
      userName: 'userName1',
    },
  });

  expect(icon).toMatchSnapshot();

  // Uncheck all
  icon.props.onClick();
  expect(mockFn).toHaveBeenCalledWith('user1');
});

it('should handle noRowsRenderer', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Table
        getMessages={R.identity}
        data={[]}
        checkedList={[]}
        onCheckedListChange={() => {}}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();
  const render = table.noRowsRenderer();

  expect(render).toMatchSnapshot();
});

it('should handle userNameCellRenderer', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Table
        getMessages={R.identity}
        data={[]}
        checkedList={[]}
        onCheckedListChange={() => {}}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();
  const render = table.userNameCellRenderer({
    rowData: {
      userId: 'user1',
      email: 'email1',
      userName: 'userName1',
    },
  });

  expect(render).toMatchSnapshot();
});

it('should handle userNameCellRenderer with isActive status', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Table
        getMessages={R.identity}
        data={[]}
        checkedList={[]}
        onCheckedListChange={() => {}}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();

  expect(
    table.userNameCellRenderer({
      rowData: {
        userId: 'user1',
        email: 'email1',
        userName: 'userName1',
        isActive: true,
      },
    }),
  ).toMatchSnapshot();

  expect(
    table.userNameCellRenderer({
      rowData: {
        userId: 'user1',
        email: 'email1',
        userName: 'userName1',
        isActive: false,
      },
    }),
  ).toMatchSnapshot();
});

it('should handle emailCellRenderer with isActive status', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Table
        getMessages={R.identity}
        data={[]}
        checkedList={[]}
        onCheckedListChange={() => {}}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();

  expect(
    table.emailCellRenderer({
      rowData: {
        userId: 'user1',
        email: 'email1',
        userName: 'userName1',
        isActive: true,
      },
    }),
  ).toMatchSnapshot();

  expect(
    table.emailCellRenderer({
      rowData: {
        userId: 'user1',
        email: 'email1',
        userName: 'userName1',
        isActive: false,
      },
    }),
  ).toMatchSnapshot();
});

it('should handle rowGetter', () => {
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

  const table = wrapper.find(Table).getNode();

  expect(table.rowGetter({ index: 0 })).toEqual({
    userId: 'user1',
    email: 'email1',
    userName: 'userName1',
  });
});

it('should handle onSort', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Table
        getMessages={R.identity}
        data={[
          {
            userId: '1',
            email: '1',
            userName: '1',
          },
          {
            userId: '2',
            email: '2',
            userName: '2',
          },
        ]}
        checkedList={[]}
        onCheckedListChange={() => {}}
        onEditClick={() => {}}
      />
    </ThemeProvider>,
  );

  const table = wrapper.find(Table).getNode();
  // Before sort
  expect(table.state.sortedList).toMatchSnapshot();

  // After sort
  table.onSort({ sortBy: 'userId', sortDirection: 'DESC' });
  expect(table.state.sortBy).toBe('userId');
  expect(table.state.sortDirection).toBe('DESC');
  expect(table.state.sortedList).toMatchSnapshot();
});
