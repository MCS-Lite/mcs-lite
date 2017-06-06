import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import System, { DEFAULT_TAB_VALUE } from '../System';

it('should renders <System> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <System
      getMessages={R.identity}
      system={{
        db: '',
        oauth: '',
        rest: '',
        wot: '',
      }}
      fetchSystemByType={fetchMock}
      uploadSystemByType={() => {}}
      setSystemByType={() => {}}
      postReset={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith(DEFAULT_TAB_VALUE);
});
