import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'Data.dataManagement': {
    id: 'Data.dataManagement',
    description: 'Meta/Title',
    defaultMessage: '資料管理',
  },
  'Data.description': {
    id: 'Data.description',
    defaultMessage: '可以清除 MCS Lite 所有資料，包含使用者清單以及測試裝置等等。',
  },
  'Data.reset': {
    id: 'Data.reset',
    defaultMessage: '清除所有資料',
  },
  'Data.reset.confirm1': {
    id: 'Data.reset.confirm1',
    defaultMessage: '確定要清除所有資料嗎？',
  },
  'Data.reset.confirm2': {
    id: 'Data.reset.confirm2',
    defaultMessage: '清除後，系統將自動關閉， 請重新啟動服務。',
  },
  'Data.reset.success': {
    id: 'Data.reset.success',
    defaultMessage: '成功！已清除所有資料。',
  },
});

export default messages;
