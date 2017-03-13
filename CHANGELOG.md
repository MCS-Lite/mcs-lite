# MCS Lite changelogs

## Released (2017-03-13)

### Bump Versions

-   babel-preset-mcs-lite@0.1.2
-   mcs-lite-connect@0.1.2
-   mcs-lite-demo-nextjs@0.1.8
-   mcs-lite-icon@0.1.6
-   mcs-lite-mobile-web@0.2.0
-   mcs-lite-scripts@0.1.4
-   mcs-lite-theme@0.1.2
-   mcs-lite-ui@0.2.0
-   react-intl-cra@0.1.4
-   react-intl-inject-hoc@0.1.4

#### :rocket: New Feature
* `mcs-lite-mobile-web`
  * [#217](https://github.com/evenchange4/mcs-lite/pull/217) feat(Signin): add errorMessage feature. ([@evenchange4](https://github.com/evenchange4))
  * [#216](https://github.com/evenchange4/mcs-lite/pull/216) feat(Password): add validators. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-connect`, `mcs-lite-mobile-web`
  * [#211](https://github.com/evenchange4/mcs-lite/pull/211) feat(Datapoints): add query feautre. ([@evenchange4](https://github.com/evenchange4))

#### :boom: Breaking Change
* `mcs-lite-mobile-web`
  * [#217](https://github.com/evenchange4/mcs-lite/pull/217) feat(Signin): add errorMessage feature. ([@evenchange4](https://github.com/evenchange4))
  
  Replaced url `/signin` with `/login`.
  
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#215](https://github.com/evenchange4/mcs-lite/pull/215) feat(DataChannelAdapter): update type with uppercase. ([@evenchange4](https://github.com/evenchange4))
  
  ```diff
  -        type: 'submit'|'change'|'clear', // event type
  +        type: 'SUBMIT'|'CHANGE'|'CLEAR', // event type
  ```
  
  * [#214](https://github.com/evenchange4/mcs-lite/pull/214) fix(DataChannelAdapter): handle default value of dataChannelProps.values. ([@evenchange4](https://github.com/evenchange4))
  
  ```diff
  -                    values: datachannel.datapoints.values || {},
  +                    values: datachannel.datapoints.values,
  ```

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#219](https://github.com/evenchange4/mcs-lite/pull/219) fix(CSS): remove duplicate normalize.css. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-ui`
  * [#209](https://github.com/evenchange4/mcs-lite/pull/209) test(DataChannelAdapter): add tests for eventHandler. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#214](https://github.com/evenchange4/mcs-lite/pull/214) fix(DataChannelAdapter): handle default value of dataChannelProps.values. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `babel-preset-mcs-lite`, `mcs-lite-connect`, `mcs-lite-scripts`, `mcs-lite-theme`, `mcs-lite-ui`, `react-intl-inject-hoc`
  * [#218](https://github.com/evenchange4/mcs-lite/pull/218) chore(ncu): upgrade npm_modules (babel, d3-color). ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `babel-preset-mcs-lite`, `mcs-lite-connect`, `mcs-lite-scripts`, `mcs-lite-theme`, `mcs-lite-ui`, `react-intl-inject-hoc`
  * [#218](https://github.com/evenchange4/mcs-lite/pull/218) chore(ncu): upgrade npm_modules (babel, d3-color). ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#210](https://github.com/evenchange4/mcs-lite/pull/210) feat(babel-preset): switch to babel-preset of CRA. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-09)

### Bump Versions

-   mcs-lite-demo-nextjs@0.1.7
-   mcs-lite-introduction@0.1.4
-   mcs-lite-mobile-web@0.1.9
-   mcs-lite-ui@0.1.7

#### :rocket: New Feature
* `mcs-lite-introduction`
  * [#205](https://github.com/evenchange4/mcs-lite/pull/205) feat(mcs-lite-introduction): change the folder name to lower cases and add i18n feature. ([@dariachen](https://github.com/dariachen))

#### :bug: Bug Fix
* `mcs-lite-ui`
  * [#208](https://github.com/evenchange4/mcs-lite/pull/208) test(DataChannelAdapter): add tests. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Daria Chen ([dariachen](https://github.com/dariachen))
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-09)

### Bump Versions

-   mcs-lite-introduction@0.1.3

#### :bug: Bug Fix
* `mcs-lite-introduction`
  * [#207](https://github.com/evenchange4/mcs-lite/pull/207) fix(gitbook/pack): use .bookignore instead of rm -rf. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-introduction`
  * [#206](https://github.com/evenchange4/mcs-lite/pull/206) chore(gitbook): remove package.json. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-08)

### Bump Versions

-   mcs-lite-demo-nextjs@0.1.6
-   mcs-lite-design@0.1.3
-   mcs-lite-icon@0.1.5
-   mcs-lite-introduction@0.1.2 😍
-   mcs-lite-mobile-web@0.1.8
-   mcs-lite-ui@0.1.6

#### :rocket: New Feature
* `mcs-lite-mobile-web`
  * [#199](https://github.com/evenchange4/mcs-lite/pull/199) feat(App/Title): setup react-helmet at root App container. ([@evenchange4](https://github.com/evenchange4))
  * [#194](https://github.com/evenchange4/mcs-lite/pull/194) feat(Module/Datapoints): add new History chart for data channels. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-design`, `mcs-lite-mobile-web`
  * [#197](https://github.com/evenchange4/mcs-lite/pull/197) feat(Logo/icons): add iPhone icons for safari add-to-homescreen feature. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `mcs-lite-introduction`
  * [#202](https://github.com/evenchange4/mcs-lite/pull/202) docs(Resources): create package for each documents.. ([@dariachen](https://github.com/dariachen))

#### :house: Internal
* `mcs-lite-mobile-web`
  * [#200](https://github.com/evenchange4/mcs-lite/pull/200) test(i18n): extract messages.tests. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 2
- Daria Chen ([dariachen](https://github.com/dariachen))
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-07)

**This release just for testing release flow.**

### Bump Versions

-   mcs-lite-mobile-web@0.1.7

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#191](https://github.com/evenchange4/mcs-lite/pull/191) fix(Mobile/publish): build at prepublish-phase so that we can get current version of packages.json.. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-mobile-web`
  * [#188](https://github.com/evenchange4/mcs-lite/pull/188) test(Module/UI): add more toast test. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-mobile-web`
  * [#191](https://github.com/evenchange4/mcs-lite/pull/191) fix(Mobile/publish): build at prepublish-phase so that we can get current version of packages.json.. ([@evenchange4](https://github.com/evenchange4))
  * [#189](https://github.com/evenchange4/mcs-lite/pull/189) chore(ncu): upgrade cycle & cra without any breaking changes. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-06)

### Bump Versions

-   babel-preset-mcs-lite@0.1.1
-   mcs-lite-connect@0.1.1
-   mcs-lite-demo-nextjs@0.1.5
-   mcs-lite-design@0.1.2
-   mcs-lite-icon@0.1.4
-   mcs-lite-mobile-web@0.1.5
-   mcs-lite-scripts@0.1.3
-   mcs-lite-theme@0.1.1
-   mcs-lite-ui@0.1.5
-   react-intl-cra@0.1.3
-   react-intl-inject-hoc@0.1.3
-   stylelint-config-mcs-lite@0.1.1

#### :rocket: New Feature
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#187](https://github.com/evenchange4/mcs-lite/pull/187) feat(DataChannelDetail): enable websocket. ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `mcs-lite-ui`
  * [#184](https://github.com/evenchange4/mcs-lite/pull/184) feat(babel-plugin): support for reducing bundle size of recompose and recharts. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`
  * [#178](https://github.com/evenchange4/mcs-lite/pull/178) refactor(Module/Side-effects): replace redux-observable with redux-cycles. ([@evenchange4](https://github.com/evenchange4))

#### :boom: Breaking Change
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`
  * [#178](https://github.com/evenchange4/mcs-lite/pull/178) refactor(Module/Side-effects): replace redux-observable with redux-cycles. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-connect`, `mcs-lite-demo-nextjs`, `mcs-lite-design`, `mcs-lite-icon`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-theme`, `react-intl-cra`, `react-intl-inject-hoc`
  * [#181](https://github.com/evenchange4/mcs-lite/pull/181) fix(Building): timeout problem. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#186](https://github.com/evenchange4/mcs-lite/pull/186) feat(datetimeFormat): replace moment with date-fp. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#177](https://github.com/evenchange4/mcs-lite/pull/177) refactor(auth/module): handle error. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-demo-nextjs`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#176](https://github.com/evenchange4/mcs-lite/pull/176) feat(package): ncu & update redux-observable to 0.14. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`
  * [#178](https://github.com/evenchange4/mcs-lite/pull/178) refactor(Module/Side-effects): replace redux-observable with redux-cycles. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-ui`, `stylelint-config-mcs-lite`
  * [#183](https://github.com/evenchange4/mcs-lite/pull/183) chore(ncu): ncu-update. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-connect`, `mcs-lite-demo-nextjs`, `mcs-lite-design`, `mcs-lite-icon`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-theme`, `react-intl-cra`, `react-intl-inject-hoc`
  * [#181](https://github.com/evenchange4/mcs-lite/pull/181) fix(Building): timeout problem. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`
  * [#178](https://github.com/evenchange4/mcs-lite/pull/178) refactor(Module/Side-effects): replace redux-observable with redux-cycles. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#177](https://github.com/evenchange4/mcs-lite/pull/177) refactor(auth/module): handle error. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-demo-nextjs`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#176](https://github.com/evenchange4/mcs-lite/pull/176) feat(package): ncu & update redux-observable to 0.14. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-03)

### Bump Versions

-   mcs-lite-connect@0.1.0
-   mcs-lite-demo-nextjs@0.1.4
-   mcs-lite-design@0.1.1
-   mcs-lite-icon@0.1.3
-   mcs-lite-mobile-web@0.1.4
-   mcs-lite-ui@0.1.4

#### :rocket: New Feature
* `mcs-lite-connect`, `mcs-lite-mobile-web`
  * [#174](https://github.com/evenchange4/mcs-lite/pull/174) feat(mcs-lite-connect): extract web-socket hoc. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#170](https://github.com/evenchange4/mcs-lite/pull/170) feat(Device/WebSocket): upload datapoint use websocket.. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `mcs-lite-design`, `mcs-lite-mobile-web`
  * [#172](https://github.com/evenchange4/mcs-lite/pull/172) chore(logo): update favicon and manifest.json. ([@evenchange4](https://github.com/evenchange4))
  * [#171](https://github.com/evenchange4/mcs-lite/pull/171) chore(LOGO): add logo images to mcs-lite-design. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-01)

### Bump Versions

-   babel-preset-mcs-lite@0.1.0
-   eslint-config-mcs-lite@0.1.0
-   mcs-lite-demo-nextjs@0.1.3
-   mcs-lite-design@0.1.0
-   mcs-lite-fetch-rx@0.1.2
-   mcs-lite-icon@0.1.2
-   mcs-lite-mobile-web@0.1.3
-   mcs-lite-scripts@0.1.2
-   mcs-lite-theme@0.1.0
-   mcs-lite-ui@0.1.3
-   react-intl-cra@0.1.2
-   react-intl-inject-hoc@0.1.2
-   stylelint-config-mcs-lite@0.1.0

#### :bug: Bug Fix
* `babel-preset-mcs-lite`
  * [#169](https://github.com/evenchange4/mcs-lite/pull/169) fix(babel-preset-mcs-lite): replace babel-plugin-lodash with babel-plugin-import. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-01)

### Bump Versions

-   mcs-lite-demo-nextjs@0.1.2
-   mcs-lite-fetch-rx@0.1.1
-   mcs-lite-icon@0.1.1
-   mcs-lite-mobile-web@0.1.2
-   mcs-lite-scripts@0.1.1
-   mcs-lite-ui@0.1.2
-   react-intl-cra@0.1.1
-   react-intl-inject-hoc@0.1.1

#### :rocket: New Feature
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`
  * [#164](https://github.com/evenchange4/mcs-lite/pull/164) feat(Module): add error handler. ([@evenchange4](https://github.com/evenchange4))
  * [#156](https://github.com/evenchange4/mcs-lite/pull/156) feat(Password): add changing password feature.. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#155](https://github.com/evenchange4/mcs-lite/pull/155) feat(Signout): require confirm before leaving. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-mobile-web`
  * [#162](https://github.com/evenchange4/mcs-lite/pull/162) refactor(modules/device): use startWith. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#165](https://github.com/evenchange4/mcs-lite/pull/165) chore(Jest): upgrade to jest 19. ([@evenchange4](https://github.com/evenchange4))
* Other
  * [#158](https://github.com/evenchange4/mcs-lite/pull/158) chore(danger): use danger run -v. ([@evenchange4](https://github.com/evenchange4))
  * [#153](https://github.com/evenchange4/mcs-lite/pull/153) chore(dangerJS): update rules for pot checker. ([@evenchange4](https://github.com/evenchange4))
  * [#149](https://github.com/evenchange4/mcs-lite/pull/149) feat(dangerJS): introduce danger js. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-02-23)

### Bump Versions

-   mcs-lite-demo-nextjs@0.1.0
-   mcs-lite-mobile-web@0.1.0
-   mcs-lite-ui@0.1.0

#### :boom: Breaking Change
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#147](https://github.com/evenchange4/mcs-lite/pull/147) fix(DataPointAreaChart): typo naming. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#147](https://github.com/evenchange4/mcs-lite/pull/147) fix(DataPointAreaChart): typo naming. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-02-23)

### Bump Versions

-   mcs-lite-demo-nextjs@0.0.2
-   mcs-lite-mobile-web@0.0.3
-   mcs-lite-ui@0.0.2

#### :rocket: New Feature
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#146](https://github.com/evenchange4/mcs-lite/pull/146) feat(DataPointAreaChart): add new Chart component. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#144](https://github.com/evenchange4/mcs-lite/pull/144) fix(Jest): add --runInBand for jest test in circle ci. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#139](https://github.com/evenchange4/mcs-lite/pull/139) fix(Mobile): remove source map. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* Other
  * [#145](https://github.com/evenchange4/mcs-lite/pull/145) chore(License): add license-checker. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#144](https://github.com/evenchange4/mcs-lite/pull/144) fix(Jest): add --runInBand for jest test in circle ci. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#139](https://github.com/evenchange4/mcs-lite/pull/139) fix(Mobile): remove source map. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-02-21)

### Bump Versions

-   `mcs-lite-mobile-web`: `0.0.2`
-   `react-intl-inject-hoc`: `0.0.1`

#### :rocket: New Feature
* `mcs-lite-mobile-web`, `react-intl-inject-hoc`
  * [#135](https://github.com/evenchange4/mcs-lite/pull/135) feat(react-intl-inject-hoc): add new package. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* Other
  * [#133](https://github.com/evenchange4/mcs-lite/pull/133) chore(circle): remove pack scripts. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))
