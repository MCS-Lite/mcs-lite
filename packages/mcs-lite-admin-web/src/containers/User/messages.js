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
  'User.addUser': {
    id: 'User.addUser',
    defaultMessage: '新增使用者',
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
});

export default messages;