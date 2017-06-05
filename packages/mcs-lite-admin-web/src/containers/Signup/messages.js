import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'Signup.signup': {
    id: 'Signup.signup',
    description: 'Document Title',
    defaultMessage: '註冊',
  },
  'Signup.createAdminAccount': {
    id: 'Signup.createAdminAccount',
    defaultMessage: '建立管理者帳戶',
  },
  'Signup.userName': {
    id: 'Signup.userName',
    defaultMessage: '暱稱',
  },
  'Signup.email': {
    id: 'Signup.email',
    defaultMessage: 'Email',
  },
  'Signup.password': {
    id: 'Signup.password',
    defaultMessage: '密碼',
  },
  'Signup.password2': {
    id: 'Signup.password2',
    defaultMessage: '確認您的密碼',
  },
  'Signup.lengthError': {
    id: 'Signup.lengthError',
    defaultMessage: '密碼長度需要長於 8 個字元',
  },
  'Signup.password2.error': {
    id: 'Signup.password2.error',
    defaultMessage: '新密碼和確認密碼不一致',
  },
});

export default messages;
