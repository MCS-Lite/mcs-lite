import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'DeviceDataChannelDetail.dataChannelDetail': {
    id: 'DeviceDataChannelDetail.dataChannelDetail',
    defaultMessage: '資料通道詳情',
  },
  'DeviceDataChannelDetail.historyChart': {
    id: 'DeviceDataChannelDetail.historyChart',
    defaultMessage: '歷史資料圖表',
  },
  'DeviceDataChannelDetail.defaultQueryLatest': {
    id: 'DeviceDataChannelDetail.defaultQueryLatest',
    description: 'label hint',
    defaultMessage: '預設值為顯示最新100筆資料',
  },
  'DeviceDataChannelDetail.reset': {
    id: 'DeviceDataChannelDetail.reset',
    description: 'reset for history query',
    defaultMessage: '回復預設值',
  },
  'DeviceDataChannelDetail.noData': {
    id: 'DeviceDataChannelDetail.noData',
    description: 'No Data avaliable for history',
    defaultMessage: '尚無資料',
  },
});

export default messages;
