import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Layout from '../';

it('should renders <Layout.LayoutDefault> correctly', () => {
  const wrapper = shallow(
    <Layout.LayoutDefault>
      <div>Mock children</div>
    </Layout.LayoutDefault>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should renders <Layout.LayoutDialog> correctly', () => {
  const wrapper = shallow(
    <Layout.LayoutDialog>
      <div>Mock children</div>
    </Layout.LayoutDialog>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
