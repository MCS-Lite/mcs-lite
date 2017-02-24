import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'Password.changePassword': {
    id: 'Password.changePassword',
    description: 'Title',
    defaultMessage: '修改密碼',
  },

  'Password.newPassword.label': {
    id: 'Password.newPassword.label',
    description: 'Label',
    defaultMessage: '新密碼',
  },
  'Password.newPassword.placeholder': {
    id: 'Password.newPassword.placeholder',
    description: 'Placeholder',
    defaultMessage: '輸入新密碼',
  },

  'Password.newPasswordAgain.label': {
    id: 'Password.newPasswordAgain',
    description: 'Label',
    defaultMessage: '確認密碼',
  },
  'Password.newPasswordAgain.placeholder': {
    id: 'Password.newPasswordAgain.placeholder',
    description: 'Placeholder',
    defaultMessage: '再次輸入新密碼',
  },
  'Password.newPasswordAgain.error': {
    id: 'Password.newPasswordAgain.error',
    defaultMessage: '確認密碼與新密碼不相符',
  },

  'Password.cancel': {
    id: 'Password.cancel',
    defaultMessage: '取消',
  },
  'Password.save': {
    id: 'Password.save',
    defaultMessage: '儲存',
  },
  'Password.success': {
    id: 'Password.success',
    description: 'Toast',
    defaultMessage: '成功！你已經成功修改密碼。',
  },
});

export default messages;
