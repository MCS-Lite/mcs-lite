import React from 'react';
import Rx from 'rxjs';
import R from 'ramda';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import { IconLoading, IconDone } from 'mcs-lite-icon';
import CopyButton, { getStatusStream } from '../CopyButton';

jest.mock('copy-to-clipboard');
jest.mock('mcs-lite-icon');
jest.unmock('react-dom');

const jestRxAssert = (actual, expected) => {
  const isEqual = R.equals(actual, expected);
  if (!isEqual) {
    console.error('Actual:', actual, '\n\n', 'Expected:', expected); // eslint-disable-line
  }
  expect(isEqual).toBe(true);
};

it('should handle onClick', (done) => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <CopyButton
        text={123}
      >
        Copy
      </CopyButton>
    </ThemeProvider>,
  );

  // After clicking
  wrapper.find('button').simulate('click');

  expect(wrapper.find(CopyButton).contains(<IconLoading />)).toBe(true);

  setTimeout(() => {
    expect(wrapper.find(CopyButton).contains(<IconDone />)).toBe(true);
    done();
  }, 600);
});

it('should return correct status marble diagram with one click', () => {
  const scheduler = new Rx.TestScheduler(jestRxAssert);
  const sourceMarble = '---x';
  const resultMarble = '1--2--3-4';
  const click$ = scheduler.createHotObservable(sourceMarble);
  const source = getStatusStream(click$, 30, 50, scheduler);
  const values = {
    1: 'default',
    2: 'loading',
    3: 'success',
    4: 'default',
  };
  scheduler.expectObservable(source).toBe(resultMarble, values);
  scheduler.flush();
});

it('should return correct status marble diagram with three clicks', () => {
  const scheduler = new Rx.TestScheduler(jestRxAssert);
  const sourceMarble = '---xyz';
  const resultMarble = '1--222--3-4';
  const click$ = scheduler.createHotObservable(sourceMarble);
  const source = getStatusStream(click$, 30, 50, scheduler);
  const values = {
    1: 'default',
    2: 'loading',
    3: 'success',
    4: 'default',
  };
  scheduler.expectObservable(source).toBe(resultMarble, values);
  scheduler.flush();
});

it('should return correct status marble diagram with intervals', () => {
  const scheduler = new Rx.TestScheduler(jestRxAssert);
  const sourceMarble = '---x--y';
  const resultMarble = '1--2--2--3-4';
  const click$ = scheduler.createHotObservable(sourceMarble);
  const source = getStatusStream(click$, 30, 50, scheduler);
  const values = {
    1: 'default',
    2: 'loading',
    3: 'success',
    4: 'default',
  };
  scheduler.expectObservable(source).toBe(resultMarble, values);
  scheduler.flush();
});

it('should return correct status marble diagram with intervals2', () => {
  const scheduler = new Rx.TestScheduler(jestRxAssert);
  const sourceMarble = '---x---y';
  const resultMarble = '1--2--32--3-4';
  const click$ = scheduler.createHotObservable(sourceMarble);
  const source = getStatusStream(click$, 30, 50, scheduler);
  const values = {
    1: 'default',
    2: 'loading',
    3: 'success',
    4: 'default',
  };
  scheduler.expectObservable(source).toBe(resultMarble, values);
  scheduler.flush();
});
