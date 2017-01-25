# MCS Lite [![CircleCI](https://circleci.com/gh/evenchange4/mcs-lite/tree/master.svg?style=svg&circle-token=c633ab2d85927871bccf4c39d676ce242f2da24c)](https://circleci.com/gh/evenchange4/mcs-lite/tree/master)

Try it online - http://mcs-lite-ui.netlify.com/

## Requirements

-   node >= 7.4.0
-   npm >= 4.0.5

## Packages

| **Package**                 | **Description**                             |
|-----------------------------|---------------------------------------------|
| `babel-preset-mcs-lite`     | Babel config                                |
| `eslint-config-mcs-lite`    | JS coding style                             |
| `mcs-lite-demo-nextjs`      | Demo how to use mcs-lite-ui.                |
| `mcs-lite-design`           | The source files to be compressed.          |
| `mcs-lite-icon`             | Convert svg to react components.            |
| `mcs-lite-scripts`          | Shared scripts                              |
| `mcs-lite-theme`            | Defined `Theme` object and color helpers.   |
| `mcs-lite-ui`               | MCS Lite common UI and storybook demo page. |
| `stylelint-config-mcs-lite` | CSS coding style                            |

## Getting Started

```
$ npm run clean # Remove all node_modules
$ npm install # Install all external dependencies of each package.
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
$ npm run test --watch --coverage
```


## NPM Scipts interface

| **Package**                 | clean | test | start | build | lint | prepublish |
|-----------------------------|-------|------|-------|-------|------|------------|
| `babel-preset-mcs-lite`     |       | V    |       |       |      |            |
| `eslint-config-mcs-lite`    |       | V    |       |       |      |            |
| `mcs-lite-demo-nextjs`      |       |      | V     |       |      |            |
| `mcs-lite-design`           | V     |      |       | V     |      | V          |
| `mcs-lite-icon`             | V     |      |       | V     |      | V          |
| `mcs-lite-scripts`          |       |      |       |       |      |            |
| `mcs-lite-theme`            | V     |      |       | V     |      | V          |
| `mcs-lite-ui`               | V     | V    | V     | V     | V    | V          |
| `stylelint-config-mcs-lite` |       | V    |       |       |      |            |
