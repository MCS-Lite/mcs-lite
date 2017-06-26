import { withRouter } from 'react-router';
import { compose, pure } from 'recompose';
import IntlProvider from './IntlProvider';

export default compose(pure, withRouter)(IntlProvider);
