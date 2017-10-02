import React from 'react';
import * as R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DialogConfirm from '../DialogConfirm';

jest.mock('mcs-lite-ui/lib/Dialog');
jest.mock('mcs-lite-ui/lib/Panel');
jest.mock('mcs-lite-ui/lib/Button');

it('should renders <DialogConfirm> correctly', () => {
  const wrapper = shallow(
    <DialogConfirm
      show={false}
      onCancel={() => {}}
      onSubmit={() => {}}
      getMessages={R.identity}
    >
      children
    </DialogConfirm>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
