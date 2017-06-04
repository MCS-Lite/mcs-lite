import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'Ip.mcsLiteIpConnection': {
    id: 'Ip.mcsLiteIpConnection',
    description: 'Meta/Title',
    defaultMessage: 'MCS lite 的連線 IP',
  },
  'Ip.description': {
    id: 'Ip.description',
    description: 'description',
    defaultMessage: '使用者可透過下列的 IP 位址連線至 MCS Lite 服務器。',
  },
  'Ip.serviceIpAddress': {
    id: 'Ip.serviceIpAddress',
    defaultMessage: '服務器 IP 位址',
  },
  'Ip.goToMCSLite': {
    id: 'Ip.goToMCSLite',
    defaultMessage: '前往 MCS Lite',
  },
  'Ip.na': {
    id: 'Ip.na',
    defaultMessage: '目前尚無可連線的服務，請先啟動本服務。',
  },
});

export default messages;
