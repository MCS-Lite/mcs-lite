import React from 'react';
import R from 'ramda';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from 'mcs-lite-ui/lib/Input';
import FormGroup from 'mcs-lite-ui/lib/FormGroup';
import User, { ADD_USER_TYPE_BATCH } from '../User';
import {
  InputFilterWrapper,
  FooterWrapper,
  StyledCommonDialog,
  TabWrapper,
  RadioWrapper,
  ErrorMessageP,
  InputFileWrapper,
} from '../styled-components';
import DialogConfirm from '../../../components/DialogConfirm';
import Table from '../Table';
import MockProvider from '../../../utils/MockProvider';

it('should renders <User> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <User
      getMessages={R.identity}
      users={[
        {
          userId: 'user1',
          email: 'email1',
          userName: 'userName1',
          isActive: true,
        },
        {
          userId: 'user2',
          email: 'email2',
          userName: 'userName2',
          isActive: false,
        },
      ]}
      fetchUsers={fetchMock}
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalled();
});

it('should render with ADD_USER_TYPE_BATCH form', () => {
  const wrapper = shallow(
    <User
      getMessages={R.identity}
      users={[
        {
          userId: 'user1',
          email: 'email1',
          userName: 'userName1',
          isActive: true,
        },
        {
          userId: 'user2',
          email: 'email2',
          userName: 'userName2',
          isActive: false,
        },
      ]}
      fetchUsers={() => {}}
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );
  const batchInput = wrapper.find('input#batch');
  expect(
    toJson(wrapper.find(StyledCommonDialog).first().find(FormGroup)),
  ).toMatchSnapshot('should render with ADD_USER_TYPE_BATCH form - one');

  // After change to batch
  batchInput.simulate('change', {
    target: {
      value: ADD_USER_TYPE_BATCH,
    },
  });
  expect(
    toJson(wrapper.find(StyledCommonDialog).first().find(FormGroup)),
  ).toMatchSnapshot('should render with ADD_USER_TYPE_BATCH form - batch');
});

it('should render with delete footer', () => {
  const wrapper = shallow(
    <User
      getMessages={R.identity}
      users={[
        {
          userId: 'user1',
          email: 'email1',
          userName: 'userName1',
          isActive: true,
        },
        {
          userId: 'user2',
          email: 'email2',
          userName: 'userName2',
          isActive: false,
        },
      ]}
      fetchUsers={() => {}}
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );
  expect(toJson(wrapper.find(FooterWrapper))).toMatchSnapshot(
    'should render with delete footer - Add',
  );

  // After
  const table = wrapper.find(Table);
  table.props().onCheckedListChange(['user1', 'user2']);

  expect(toJson(wrapper.find(FooterWrapper))).toMatchSnapshot(
    'should render with delete footer - Delete',
  );
});

it('should return correct isAddDialogShow$', () => {
  const wrapper = shallow(
    <User
      getMessages={R.identity}
      users={[]}
      fetchUsers={() => {}}
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );
  const mockEvent = {
    preventDefault: jest.fn(),
  };
  const getAddDialog = w => w.find(StyledCommonDialog).first();
  const button = wrapper.find(FooterWrapper).children();

  expect(mockEvent.preventDefault).not.toHaveBeenCalled();
  expect(getAddDialog(wrapper).props().show).toBe(false);

  // After onShow
  button.simulate('click');
  expect(getAddDialog(wrapper).props().show).toBe(true);

  // After onHide
  getAddDialog(wrapper).props().onHide(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
  expect(getAddDialog(wrapper).props().show).toBe(false);
});

it('should return correct isEditDialogShow$', () => {
  const wrapper = shallow(
    <User
      getMessages={R.identity}
      users={[
        {
          userId: 'user1',
          email: 'email1',
          userName: 'userName1',
          isActive: true,
        },
        {
          userId: 'user2',
          email: 'email2',
          userName: 'userName2',
          isActive: false,
        },
      ]}
      fetchUsers={() => {}}
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );
  const mockEvent = {
    preventDefault: jest.fn(),
  };
  const getEditDialog = w => w.find(StyledCommonDialog).at(1);
  const table = wrapper.find(Table);

  expect(mockEvent.preventDefault).not.toHaveBeenCalled();
  expect(getEditDialog(wrapper).props().show).toBe(false);

  // After onShow
  table.props().onEditClick('user1');
  expect(getEditDialog(wrapper).props().show).toBe(true);

  // After onHide
  getEditDialog(wrapper).props().onHide(mockEvent);
  expect(mockEvent.preventDefault).toHaveBeenCalled();
  expect(getEditDialog(wrapper).props().show).toBe(false);

  // // footer
  // expect(toJson(wrapper.find(FooterWrapper))).toMatchSnapshot();
});

it('should handle onFormDataChange$', () => {
  const wrapper = mount(
    <MockProvider>
      <User
        getMessages={R.identity}
        users={[
          {
            userId: 'user1',
            email: 'email1',
            userName: 'userName1',
            isActive: true,
          },
          {
            userId: 'user2',
            email: 'email2',
            userName: 'userName2',
            isActive: false,
          },
        ]}
        fetchUsers={() => {}}
        deleteUsers={() => {}}
        createUser={() => {}}
        createUserByCSV={() => {}}
        changePasswordById={() => {}}
        putIsActiveById={() => {}}
      />
    </MockProvider>,
  );
  const getUsernameInput = w => w.find(Input).first();

  // After change
  getUsernameInput(wrapper).simulate('change', {
    target: { id: '123', value: '123' },
  });
  expect(getUsernameInput(wrapper).props().value).toBe('123');
});

it('should handle onAddSubmit', () => {
  const mockFetch = jest.fn();
  const wrapper = mount(
    <MockProvider>
      <User
        getMessages={R.identity}
        users={[
          {
            userId: 'user1',
            email: 'email1',
            userName: 'userName1',
            isActive: true,
          },
          {
            userId: 'user2',
            email: 'email2',
            userName: 'userName2',
            isActive: false,
          },
        ]}
        fetchUsers={() => {}}
        deleteUsers={() => {}}
        createUser={mockFetch}
        createUserByCSV={() => {}}
        changePasswordById={() => {}}
        putIsActiveById={() => {}}
      />
    </MockProvider>,
  );
  const mockEvent = {
    preventDefault: jest.fn(),
  };
  const dialog = wrapper.find(StyledCommonDialog).first();
  expect(mockFetch).not.toHaveBeenCalled();

  // After
  dialog.props().onSubmit(mockEvent);
  expect(mockFetch).toHaveBeenCalledWith(
    {
      email: '',
      password: '',
      userName: '',
    },
    'addUser.success',
  );
});

it('should handle onEditSubmit', () => {
  const mockFetch = jest.fn();
  const wrapper = mount(
    <MockProvider>
      <User
        getMessages={R.identity}
        users={[
          {
            userId: 'user1',
            email: 'email1',
            userName: 'userName1',
            isActive: true,
          },
          {
            userId: 'user2',
            email: 'email2',
            userName: 'userName2',
            isActive: false,
          },
        ]}
        fetchUsers={() => {}}
        deleteUsers={() => {}}
        createUser={() => {}}
        createUserByCSV={() => {}}
        changePasswordById={mockFetch}
        putIsActiveById={() => {}}
      />
    </MockProvider>,
  );
  const mockEvent = {
    preventDefault: jest.fn(),
  };
  const dialog = wrapper.find(StyledCommonDialog).at(1);
  const table = wrapper.find(Table);
  table.props().onEditClick('user2');
  expect(mockFetch).not.toHaveBeenCalled();

  // After
  dialog.props().onSubmit(mockEvent);
  expect(mockFetch).toHaveBeenCalledWith('user2', '', 'changePassword.success');
});

it('should handle onDeleteSubmit', () => {
  const mockFetch = jest.fn();
  const wrapper = mount(
    <MockProvider>
      <User
        getMessages={R.identity}
        users={[
          {
            userId: 'user1',
            email: 'email1',
            userName: 'userName1',
            isActive: true,
          },
          {
            userId: 'user2',
            email: 'email2',
            userName: 'userName2',
            isActive: false,
          },
        ]}
        fetchUsers={() => {}}
        deleteUsers={mockFetch}
        createUser={() => {}}
        createUserByCSV={() => {}}
        changePasswordById={() => {}}
        putIsActiveById={() => {}}
      />
    </MockProvider>,
  );
  const mockEvent = {
    preventDefault: jest.fn(),
  };
  const dialog = wrapper.find(DialogConfirm).first();
  const table = wrapper.find(Table);
  table.props().onCheckedListChange(['user1', 'user2']);
  expect(mockFetch).not.toHaveBeenCalled();

  // After
  dialog.props().onSubmit(mockEvent);
  expect(mockFetch).toHaveBeenCalledWith(
    ['user1', 'user2'],
    'deleteUser.success',
  );
});
