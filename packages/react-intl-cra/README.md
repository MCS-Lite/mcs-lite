# react-intl-cra
> Extract messages of `Creact React App` from the command line.

This is just a workaround for [create-react-app #1227](https://github.com/facebookincubator/create-react-app/issues/1227#issuecomment-285738137) and [react-intl #869](https://github.com/yahoo/react-intl/issues/869) in unofficial way.

## Installation

```console
$ npm i react-intl-cra --save-dev
```

## Usage

```json
$ react-intl-cra './src/**/*.js' './messages.json'
```

## Output


```json
// message.json

[
  {
    "id": "Account.account",
    "description": "Title",
    "defaultMessage": "帳戶",
    "filepath": "./src/containers/Account/messages.js"
  },
  {
    "id": "Account.myTestDevices",
    "defaultMessage": "我的測試裝置",
    "filepath": "./src/containers/Account/messages.js"
  },
  ...
]
```


## API

| **Arguments**          |  **Description**                          |
| ---------------------- | ----------------------------------------- |
| First -  `srcPattern`  |  The pattern of React component files     |
| Second - `desPath`     |  The output pathname of the `.json` file. |
