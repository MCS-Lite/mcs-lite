import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../Footer';

it('should renders <Footer> correctly', () => {
  const wrapper = shallow(<Footer getMessages={t => t} />);

  const tree = toJson(wrapper);

  expect(tree).toMatchStyledComponentsSnapshot();
});
