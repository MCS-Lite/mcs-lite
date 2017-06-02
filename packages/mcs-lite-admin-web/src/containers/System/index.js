import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions } from '../../modules/system';
import System from './System';

export const mapStateToProps = ({ ui, system }) => ({
  system,
  isLoading: ui.isLoading,
});

export const mapDispatchToProps = {
  fetchSystemByType: actions.fetchSystemByType,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'System'),
)(System);
