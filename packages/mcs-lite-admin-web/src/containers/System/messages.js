import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'System.systemManagement': {
    id: 'System.systemManagement',
    description: 'Meta/Title',
    defaultMessage: '系統管理',
  },
  'System.description': {
    id: 'System.description',
    description: 'description',
    defaultMessage: '修改系統的參數設定。',
  },
  'System.jsonError': {
    id: 'System.jsonError',
    defaultMessage: 'JSON 資料格式錯誤',
  },
  'System.save': {
    id: 'System.save',
    defaultMessage: '儲存',
  },
  'System.reset': {
    id: 'System.reset',
    defaultMessage: '系統重置',
  },
  'System.reset.confirm': {
    id: 'System.reset.confirm',
    defaultMessage: '是否確定重置系統？',
  },
  'System.reset.success': {
    id: 'System.reset.success',
    defaultMessage: '成功！系統已重置，請重新登入。',
  },
});

export default messages;
