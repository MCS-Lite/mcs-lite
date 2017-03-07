# MCS Lite Developer Guide

## Table of Contents

-   [Release Flow](#release-flow)
-   [Technology Stack](#technology-stack)
-   [Packages Relation](#packages-relation)
-   [DataChannelAdapter Design](#datachanneladapter-design)
-   [How To Add New Icon?](#how-to-add-new-icon)

## Release Flow

1. prerelease
  - `./tasks/build.sh` (Only for dependency packages in order.)
  
2. [lerna publish](https://github.com/lerna/lerna#publish)
  - Version of package.json will be updated.
  - Create git tags.
  - npm `prepublishOnly` (Only for mobile project.)
  - Publish to npm.

**Remind: We should replace `prepublishOnly` with `prepublish` after [npm@5](https://github.com/npm/npm/blob/v4.1.2/doc/misc/npm-scripts.md#deprecation-note), therefore
MCS Lite use `npm run release` instead of `npm publish` to avoid these wired npm run behaviors.**
 
## Technology Stack

![](./images/tech-stack.png)

-   [create-react-app](https://github.com/facebookincubator/create-react-app)
-   [react-router](https://github.com/ReactTraining/react-router)
-   [react-helmet](https://github.com/nfl/react-helmet)
-   [react-motion](https://github.com/chenglou/react-motion)
-   [redux](https://github.com/reactjs/redux)
-   [redux-cycles](https://github.com/cyclejs-community/redux-cycles)
-   [styled-components](https://github.com/styled-components/styled-components)
-   [react-storybook](https://github.com/storybooks/react-storybook)
-   [react-intl](https://github.com/yahoo/react-intl)

## Packages Relation

![](./images/relation.png)

## DataChannelAdapter Design

![](./images/DataChannelAdapter.png)

## How To Add New Icon?

![](./images/create-icon-step-1.png)
![](./images/create-icon-step-2.png)
![](./images/create-icon-step-3.png)
![](./images/create-icon-step-4.png)
![](./images/create-icon-step-5.png)
