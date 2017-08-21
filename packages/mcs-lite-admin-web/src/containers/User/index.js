import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withGetMessages } from 'react-intl-inject-hoc';
import messages from './messages';
import { actions } from '../../modules/users';
import User from './User';

export const mapStateToProps = ({ users }) => ({
  users,
});

export const mapDispatchToProps = {
  fetchUsers: actions.fetchUsers,
  deleteUsers: actions.deleteUsers,
  createUser: actions.createUser,
  createUserByCSV: actions.createUserByCSV,
  changePasswordById: actions.changePasswordById,
  putIsActiveById: actions.putIsActiveById,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGetMessages(messages, 'User'),
)(User);
