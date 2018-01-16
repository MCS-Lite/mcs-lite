import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// For Enzyme 3.0
Enzyme.configure({ adapter: new Adapter() });
