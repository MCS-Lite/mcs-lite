import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions } from '../../modules/data';
import Data from './Data';

export const mapDispatchToProps = { deleteData: actions.deleteData };

export default compose(
  connect(null, mapDispatchToProps),
  withGetMessages(messages, 'Data'),
)(Data);
