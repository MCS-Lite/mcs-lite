import React from 'react';
import R from 'ramda';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import A from 'mcs-lite-ui/lib/A';
import DialogConfirm from '../../../components/DialogConfirm';
import MockProvider from '../../../utils/MockProvider';
import Data from '../Data';

it('should renders <Data> correctly', () => {
  const wrapper = shallow(
    <Data getMessages={R.identity} deleteData={() => {}} />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should return correct show props', () => {
  const wrapper = mount(
    <MockProvider>
      <Data getMessages={R.identity} deleteData={() => {}} />
    </MockProvider>,
  );

  const dialogConfirm = wrapper.find(DialogConfirm).first();
  const resetButton = wrapper.find(A);

  expect(dialogConfirm.props().show).toBe(false);

  // After Click to open
  resetButton.simulate('click');
  expect(dialogConfirm.props().show).toBe(true);

  // After onCancel
  dialogConfirm.props().onCancel();
  expect(dialogConfirm.props().show).toBe(false);

  // After Click to open
  resetButton.simulate('click');
  expect(dialogConfirm.props().show).toBe(true);

  // After onSubmit
  dialogConfirm.props().onSubmit();
  expect(dialogConfirm.props().show).toBe(false);
});

it('should call deleteData when onSubmit', () => {
  const mockDeleteData = jest.fn();
  const wrapper = mount(
    <MockProvider>
      <Data getMessages={R.identity} deleteData={mockDeleteData} />
    </MockProvider>,
  );

  expect(mockDeleteData).not.toHaveBeenCalled();

  // After onSubmit
  wrapper.find(DialogConfirm).first().props().onSubmit();
  expect(mockDeleteData).toHaveBeenCalled();
});
