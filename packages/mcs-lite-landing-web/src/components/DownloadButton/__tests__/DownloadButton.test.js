import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DownloadButton from '../DownloadButton';

jest.mock('mcs-lite-ui/lib/utils/osHelper', () => ({
  getOSName: () => 'michaelOS',
  getFileName: () => 'michaelOS.x86.gz',
}));

it('should renders <DownloadButton> correctly', () => {
  const wrapper = shallow(<DownloadButton getMessages={t => t} tag="v0.0.0" />);

  const tree = toJson(wrapper);

  expect(tree).toMatchStyledComponentsSnapshot();
});
