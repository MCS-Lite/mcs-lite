import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions } from '../../modules/service';
import Ip from './Ip';

export const mapStateToProps = ({ ui, service }) => ({
  service,
  isLoading: ui.isLoading,
});

export const mapDispatchToProps = { fetchIpList: actions.fetchIpList };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'Ip'),
)(Ip);
