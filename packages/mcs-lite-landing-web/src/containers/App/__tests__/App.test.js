import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

it('should renders <App> correctly', () => {
  const mockRouter = {
    params: {
      locale: 'zh-TW',
    },
  };
  const wrapper = shallow(<App getMessages={t => t} router={mockRouter} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
