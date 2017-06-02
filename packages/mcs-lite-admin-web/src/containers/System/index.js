import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions } from '../../modules/system';
import System from './System';

export const mapStateToProps = ({ system }) => ({
  system,
});

export const mapDispatchToProps = {
  fetchSystemByType: actions.fetchSystemByType,
  setSystemByType: actions.setSystemByType,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'System'),
)(System);
