import React from 'react';
import * as R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TabItem from 'mcs-lite-ui/lib/TabItem';
import System, { DEFAULT_TAB_VALUE } from '../System';
import DialogConfirm from '../../../components/DialogConfirm';
import { StyledButton, StyledLoadableCodeMirror } from '../styled-components';

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

it('should renders <System> correctly with json format error', () => {
  const wrapper = shallow(
    <System
      getMessages={R.identity}
      system={{
        db: '123', // format error here
        oauth: '',
        rest: '',
        wot: '',
      }}
      fetchSystemByType={() => {}}
      uploadSystemByType={() => {}}
      setSystemByType={() => {}}
      postReset={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should return correct tab value', () => {
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

  expect(fetchMock).toHaveBeenCalledWith(DEFAULT_TAB_VALUE);

  // After click last tab
  wrapper.find(TabItem).last().props().onClick({}, 'wot');
  expect(fetchMock).toHaveBeenCalledWith('wot');
  expect(fetchMock).toHaveBeenCalledTimes(2);
});

it('should handle onCodeMirrorChange', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(
    <System
      getMessages={R.identity}
      system={{
        db: '',
        oauth: '',
        rest: '',
        wot: '',
      }}
      fetchSystemByType={() => {}}
      uploadSystemByType={() => {}}
      setSystemByType={mockFn}
      postReset={() => {}}
    />,
  );

  expect(mockFn).not.toHaveBeenCalled();

  // After click last tab
  wrapper.find(StyledLoadableCodeMirror).props().onChange(123);
  expect(mockFn).toHaveBeenCalledWith({ data: 123, type: DEFAULT_TAB_VALUE });
  expect(mockFn).toHaveBeenCalledTimes(1);
});

it('should handle onSaveClick', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(
    <System
      getMessages={R.identity}
      system={{
        db: '',
        oauth: '',
        rest: '',
        wot: '',
      }}
      fetchSystemByType={() => {}}
      uploadSystemByType={mockFn}
      setSystemByType={() => {}}
      postReset={() => {}}
    />,
  );

  expect(mockFn).not.toHaveBeenCalled();

  // After click last tab
  wrapper.find(StyledButton).props().onClick({});
  expect(mockFn).toHaveBeenCalledWith(DEFAULT_TAB_VALUE, 'save.success');
  expect(mockFn).toHaveBeenCalledTimes(1);
});

it('should handle onSubmit', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(
    <System
      getMessages={R.identity}
      system={{
        db: '',
        oauth: '',
        rest: '',
        wot: '',
      }}
      fetchSystemByType={() => {}}
      uploadSystemByType={() => {}}
      setSystemByType={() => {}}
      postReset={mockFn}
    />,
  );

  expect(mockFn).not.toHaveBeenCalled();

  // After click last tab
  wrapper.find(DialogConfirm).props().onSubmit({});
  expect(mockFn).toHaveBeenCalledWith('reset.success');
  expect(mockFn).toHaveBeenCalledTimes(1);
});
