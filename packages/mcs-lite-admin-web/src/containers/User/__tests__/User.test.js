import React from 'react';
import R from 'ramda';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from 'mcs-lite-ui/lib/Input';
import FormGroup from 'mcs-lite-ui/lib/FormGroup';
import TabItem from 'mcs-lite-ui/lib/TabItem';
import User, {
  ADD_USER_TYPE_ONE,
  ADD_USER_TYPE_BATCH,
  CHANGE_PASSWORD,
  ACCOUNT_STATUS,
} from '../User';
import {
  FooterWrapper,
  StyledCommonDialog,
  ErrorMessageP,
} from '../styled-components';
import DialogConfirm from '../../../components/DialogConfirm';
import Table from '../Table';
import MockProvider from '../../../utils/MockProvider';

jest.mock('../../../utils/checkUserAvalableAPI', () => () =>
  Promise.resolve(false),
);

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
      accessToken="accessToken"
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
      accessToken="accessToken"
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );

  // After change to one
  const oneInput = wrapper.find('input#one');
  oneInput.simulate('change', {
    target: {
      value: ADD_USER_TYPE_ONE,
    },
  });
  expect(
    toJson(wrapper.find(StyledCommonDialog).first().find(FormGroup)),
  ).toMatchSnapshot(
    'should render with ADD_USER_TYPE_BATCH form - ADD_USER_TYPE_ONE',
  );

  // After change to batch
  const batchInput = wrapper.find('input#batch');
  batchInput.simulate('change', {
    target: {
      value: ADD_USER_TYPE_BATCH,
    },
  });
  expect(
    toJson(wrapper.find(StyledCommonDialog).first().find(FormGroup)),
  ).toMatchSnapshot(
    'should render with ADD_USER_TYPE_BATCH form - ADD_USER_TYPE_BATCH',
  );
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
      accessToken="accessToken"
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );

  // Before add as default
  const table = wrapper.find(Table);
  table.props().onCheckedListChange([]);
  expect(toJson(wrapper.find(FooterWrapper))).toMatchSnapshot(
    'should render with delete footer - Add',
  );

  // After change to delete
  table.props().onCheckedListChange(['user1', 'user2']);

  expect(toJson(wrapper.find(FooterWrapper))).toMatchSnapshot(
    'should render with delete footer - Delete',
  );
});

it('should render with ACCOUNT_STATUS form', () => {
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
      accessToken="accessToken"
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );
  const tabs = wrapper.find(TabItem);

  // After change tab 0 (CHANGE_PASSWORD)
  tabs.at(0).simulate('click', {}, CHANGE_PASSWORD);
  expect(
    toJson(wrapper.find(StyledCommonDialog).at(1).find(FormGroup)),
  ).toMatchSnapshot('should render with ACCOUNT_STATUS form - CHANGE_PASSWORD');

  // After change tab 1
  tabs.at(1).simulate('click', {}, ACCOUNT_STATUS);
  expect(
    toJson(wrapper.find(StyledCommonDialog).at(1).find(FormGroup)),
  ).toMatchSnapshot('should render with ACCOUNT_STATUS form - ACCOUNT_STATUS');
});

it('should return correct isAddDialogShow$', () => {
  const wrapper = shallow(
    <User
      getMessages={R.identity}
      users={[]}
      fetchUsers={() => {}}
      accessToken="accessToken"
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
      accessToken="accessToken"
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
        accessToken="accessToken"
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
        accessToken="accessToken"
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
        accessToken="accessToken"
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
        accessToken="accessToken"
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

it('should handle email onBlur', done => {
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
      accessToken="accessToken"
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );
  const getInputEmail = () =>
    wrapper.find(Input).filterWhere(e => e.props().id === 'email');

  // After change
  getInputEmail().simulate('change', {
    target: { id: 'email', value: 'evenchange4@gmail.com' },
  });
  expect(toJson(getInputEmail())).toMatchSnapshot();

  // After blur
  getInputEmail().props().onBlur();
  // TODO: do not use setTimeout
  setTimeout(() => {
    wrapper.update();
    expect(toJson(wrapper.find(ErrorMessageP))).toMatchSnapshot();
    done();
  }, 300);
});
