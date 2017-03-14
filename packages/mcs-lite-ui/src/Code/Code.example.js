import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Code from '.';

storiesOf('Code', module)
  .addWithInfo(
    'API',
    'https://github.com/conorhastings/react-syntax-highlighter#props',
    () =>
      <Code>
        {
`const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');
function itIs() {
  return 'no seriously really it is';
}`
        }
      </Code>,
    { inline: true },
  )
  .addWithInfo(
    'arduino',
    '',
    () =>
      <Code language="arduino">
        {
`include <HttpClient.h>
include <EthernetClient.h>

EthernetClient content;
HttpClient http(content);

content.println("POST /mcs/v2/devices/DzdpHYIZ/datapoints.csv HTTP/1.1");
#hint! Please do not add excessive spaces

String data = "inte,,123"

#hint! Please do not add excessive spaces
#timestamp is in unix-time format the milliseconds and is optional. If not provided,

#system will generate timestamp at the time of receiving this API
int dataLength = data.length();

content.println("Host: api.mediatek.com");
content.println("deviceKey: Cio34Lj7Na5RmQXj");
content.print("Content-Length: ");
content.println(dataLength);`
        }
      </Code>,
    { inline: true },
  )
  .addWithInfo(
    'Markdown',
    '',
    () =>
      <Code language="markdown">
        {
`### Title
[123](https://mcs.mediatek.com)
`}
      </Code>,
    { inline: true },
  )

//   .addWithInfo(
//     'http',
//     '',
//     () =>
//       <Code language="http">
//         {
// `POST /mcs/v2/devices/DzdpHYIZ/datapoints.csv HTTP/1.1
// Host: api.mediatek.com
// deviceKey: Cio34Lj7Na5RmQXj
// Cache-Control: no-cache
// Content-Length: 'Input your command length'
//
// 123123,,1`}
//       </Code>,
//     { inline: true },
//   );
