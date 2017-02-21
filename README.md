# MCS Lite [![CircleCI](https://circleci.com/gh/evenchange4/mcs-lite/tree/master.svg?style=svg&circle-token=c633ab2d85927871bccf4c39d676ce242f2da24c)](https://circleci.com/gh/evenchange4/mcs-lite/tree/master) [![codecov](https://codecov.io/gh/evenchange4/mcs-lite/branch/master/graph/badge.svg?token=r9HT3Wivr0)](https://codecov.io/gh/evenchange4/mcs-lite)

-   Try it online - http://mcs-lite-ui.netlify.com/
-   Try it online - http://mcs-lite-mobile-web.netlify.com/

* [Developer Guide](./docs/README.md)


## Requirements

-   node >= 7.5.0
-   npm >= 4.1.2

## Packages

[babel-preset-mcs-lite-npm-badge]: https://img.shields.io/npm/v/babel-preset-mcs-lite.svg?style=flat-square
[babel-preset-mcs-lite-npm]: https://www.npmjs.org/package/babel-preset-mcs-lite

[eslint-config-mcs-lite-npm-badge]: https://img.shields.io/npm/v/eslint-config-mcs-lite.svg?style=flat-square
[eslint-config-mcs-lite-npm]: https://www.npmjs.org/package/eslint-config-mcs-lite

[mcs-lite-design-npm-badge]: https://img.shields.io/npm/v/mcs-lite-design.svg?style=flat-square
[mcs-lite-design-npm]: https://www.npmjs.org/package/mcs-lite-design

[mcs-lite-fetch-rx-npm-badge]: https://img.shields.io/npm/v/mcs-lite-fetch-rx.svg?style=flat-square
[mcs-lite-fetch-rx-npm]: https://www.npmjs.org/package/mcs-lite-fetch-rx

[mcs-lite-icon-npm-badge]: https://img.shields.io/npm/v/mcs-lite-icon.svg?style=flat-square
[mcs-lite-icon-npm]: https://www.npmjs.org/package/mcs-lite-icon

[mcs-lite-mobile-web-npm-badge]: https://img.shields.io/npm/v/mcs-lite-mobile-web.svg?style=flat-square
[mcs-lite-mobile-web-npm]: https://www.npmjs.org/package/mcs-lite-mobile-web

[mcs-lite-scripts-npm-badge]: https://img.shields.io/npm/v/mcs-lite-scripts.svg?style=flat-square
[mcs-lite-scripts-npm]: https://www.npmjs.org/package/mcs-lite-scripts

[mcs-lite-theme-npm-badge]: https://img.shields.io/npm/v/mcs-lite-theme.svg?style=flat-square
[mcs-lite-theme-npm]: https://www.npmjs.org/package/mcs-lite-theme

[mcs-lite-ui-npm-badge]: https://img.shields.io/npm/v/mcs-lite-ui.svg?style=flat-square
[mcs-lite-ui-npm]: https://www.npmjs.org/package/mcs-lite-ui

[react-intl-cra-npm-badge]: https://img.shields.io/npm/v/react-intl-cra.svg?style=flat-square
[react-intl-cra-npm]: https://www.npmjs.org/package/react-intl-cra

[stylelint-config-mcs-lite-npm-badge]: https://img.shields.io/npm/v/stylelint-config-mcs-lite.svg?style=flat-square
[stylelint-config-mcs-lite-npm]: https://www.npmjs.org/package/stylelint-config-mcs-lite

| **Package** | **Description** | **Version** |
|-----------------------------|---------------------------------------------|
| `babel-preset-mcs-lite` | Babel config | [![npm][babel-preset-mcs-lite-npm-badge]]([babel-preset-mcs-lite-npm]) |
| `eslint-config-mcs-lite` | JS coding style | [![npm][eslint-config-mcs-lite-npm-badge]]([eslint-config-mcs-lite-npm]) |
| `mcs-lite-demo-nextjs` | Demo how to use mcs-lite-ui. | |
| `mcs-lite-design` | The source files to be compressed. | [![npm][mcs-lite-design-npm-badge]]([mcs-lite-design-npm]) |
| `mcs-lite-fetch-rx` | The Client api with stream creator. | [![npm][mcs-lite-fetch-rx-npm-badge]]([mcs-lite-fetch-rx-npm]) |
| `mcs-lite-icon` | Convert svg to react components. | [![npm][mcs-lite-icon-npm-badge]]([mcs-lite-icon-npm]) |
| `mcs-lite-mobile-web` | MCS Lite mobile website project. | [![npm][mcs-lite-mobile-web-npm-badge]]([mcs-lite-mobile-web-npm]) |
| `mcs-lite-scripts` | Shared scripts and some CLI `bin` files. | [![npm][mcs-lite-scripts-npm-badge]]([mcs-lite-scripts-npm]) |
| `mcs-lite-theme` | Defined `Theme` object and color helpers. | [![npm][mcs-lite-theme-npm-badge]]([mcs-lite-theme-npm]) |
| `mcs-lite-ui` | MCS Lite common UI and storybook demo page. | [![npm][mcs-lite-ui-npm-badge]]([mcs-lite-ui-npm]) |
| `react-intl-cra` | Alias for `extract-messages`. | [![npm][react-intl-cra-npm-badge]]([react-intl-cra-npm]) |
| `stylelint-config-mcs-lite` | CSS coding style | [![npm][stylelint-config-mcs-lite-npm-badge]]([stylelint-config-mcs-lite-npm]) |

## Install

```
$ npm i mcs-lite-ui mcs-lite-icon mcs-lite-theme --save
```

## Development

```
$ npm install # Install all external dependencies of each package.
```

```
$ npm run clean # Remove all node_modules
```

## Building all mono-packages

```
# design => icon => theme => ui
$ ./tasks/build.sh
```

## Testing

```
$ ./tasks/test.sh
```

## mcs-lite-ui

### Development

```
$ npm start
```

### Testing

```
$ npm run test:watch
```


## NPM Scipts Interface

| **Package**                 | clean | test | start | build | lint          |
|-----------------------------|-------|------|-------|-------|---------------|
| root                        | V     |      |       |       | V (es, style) |
| `babel-preset-mcs-lite`     |       | V    |       |       |               |
| `eslint-config-mcs-lite`    |       | V    |       |       |               |
| `mcs-lite-demo-nextjs`      |       |      | V     |       |               |
| `mcs-lite-design`           | V     |      |       | V     |               |
| `mcs-lite-fetch-rx`         | V     |      |       | V     |               |
| `mcs-lite-icon`             | V     |      |       | V     |               |
| `mcs-lite-mobile-web`       | V     | V    | V     | V     |               |
| `mcs-lite-scripts`          | V     |      |       | V     |               |
| `mcs-lite-theme`            | V     |      |       | V     |               |
| `mcs-lite-ui`               | V     | V    | V     | V     | V (flow)      |
| `react-intl-cra`            |       |      |       |       |               |
| `stylelint-config-mcs-lite` |       | V    |       |       |               |

## npm-check-updates

```
$ npm run ncu # check for all packages
$ npm run ncu-update # update packages.json
```

## Team

[![Michael Hsu](https://avatars.githubusercontent.com/u/1527371?v=3&s=96)](https://github.com/evenchange4) | [![Abel Chen](https://avatars.githubusercontent.com/u/2841286?v=3&s=96)](https://github.com/cettoana) | [![Abby Chiu](https://avatars.githubusercontent.com/u/11768650?v=3&s=96)](https://github.com/abby1002) | [![Daria Chen](https://avatars.githubusercontent.com/u/1300728?v=3&s=96)](https://github.com/dariachen) | [![blue chen](https://avatars.githubusercontent.com/u/1887942?v=3&s=96)](https://github.com/iamblue)
---|---|---|---|---|
Michael Hsu | Abel Chen | Abby Chiu | Daria Chen| blue chen
[@evenchange4](https://github.com/evenchange4) | [@cettoana](https://github.com/cettoana) | [@abby1002](https://github.com/abby1002) | [@dariachen](https://github.com/dariachen) | [@iamblue](https://github.com/iamblue)
[@evenchange4](https://twitter.com/evenchange4) | | | |
