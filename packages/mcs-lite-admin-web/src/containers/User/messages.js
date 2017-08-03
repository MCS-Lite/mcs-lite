import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'User.userManagement': {
    id: 'User.userManagement',
    description: 'Meta/Title',
    defaultMessage: '使用者管理',
  },
  'User.inputUsernameEmail': {
    id: 'User.inputUsernameEmail',
    defaultMessage: '輸入名稱或電子郵件搜尋使用者',
  },
  'User.clearFilter': {
    id: 'User.clearFilter',
    defaultMessage: '清除搜尋條件',
  },
  'User.name': {
    id: 'User.name',
    defaultMessage: '名稱',
  },
  'User.email': {
    id: 'User.email',
    defaultMessage: '電子信箱',
  },
  'User.email.placeholder': {
    id: 'User.email.placeholder',
    defaultMessage: '輸入電子信箱',
  },
  'User.addUser': {
    id: 'User.addUser',
    defaultMessage: '新增使用者',
  },
  'User.userName': {
    id: 'User.userName',
    defaultMessage: '使用者名稱',
  },
  'User.userName.placeholder': {
    id: 'User.userName.placeholder',
    defaultMessage: '輸入使用者名稱',
  },
  'User.password': {
    id: 'User.password',
    defaultMessage: '密碼',
  },
  'User.password.placeholder': {
    id: 'User.password.placeholder',
    defaultMessage: '輸入密碼',
  },
  'User.deleteUser': {
    id: 'User.deleteUser',
    defaultMessage: '刪除 {length} 位使用者',
  },
  'User.delete.confirm': {
    id: 'User.delete.confirm',
    defaultMessage: '確定要刪除使用者？',
  },
  'User.noRows': {
    id: 'User.noRows',
    defaultMessage: '此帳號不存在，請重新搜尋。',
  },
  'User.save': {
    id: 'User.save',
    defaultMessage: '儲存',
  },
  'User.cancel': {
    id: 'User.cancel',
    defaultMessage: '取消',
  },
  'User.addUser.success': {
    id: 'User.addUser.success',
    defaultMessage: '成功！使用者已新增。',
  },
  'User.deleteUser.success': {
    id: 'User.deleteUser.success',
    defaultMessage: '成功！使用者已被刪除。',
  },
});

export default messages;
