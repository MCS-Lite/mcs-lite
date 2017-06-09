# MCS Lite changelogs

## Released (2017-06-09)

#### :rocket: New Feature
* `mcs-lite-translation`
  * [#351](https://github.com/MCS-Lite/mcs-lite/pull/351) feat(i18n): add zh-TW & ignore .mo. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-translation`
  * [#352](https://github.com/MCS-Lite/mcs-lite/pull/352) feat(i18N): provide the translation strings for zh-CN and en.. ([@dariachen](https://github.com/dariachen))

#### :memo: Documentation
* [#350](https://github.com/MCS-Lite/mcs-lite/pull/350) docs(README): update developer guide. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 2
- Daria Chen ([dariachen](https://github.com/dariachen))
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-06-08)

### Bump Versions

-   babel-preset-mcs-lite: 0.3.2 => 0.3.3
-   mcs-lite-admin-web: 0.1.0 => 0.1.1
-   mcs-lite-connect: 0.3.2 => 0.3.3
-   mcs-lite-icon: 0.3.2 => 0.3.3
-   mcs-lite-mobile-web: 0.4.2 => 0.4.3
-   mcs-lite-scripts: 0.3.2 => 0.3.3
-   mcs-lite-theme: 0.3.2 => 0.3.3
-   mcs-lite-translation: 0.0.0 => 0.1.0  🎉
-   mcs-lite-ui: 0.4.2 => 0.4.3
-   react-intl-cra: 0.2.2 => 0.2.3
-   react-intl-inject-hoc: 0.2.2 => 0.2.3

#### :rocket: New Feature
* `mcs-lite-admin-web`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-translation`
  * [#348](https://github.com/MCS-Lite/mcs-lite/pull/348) feat(I18n): add new mcs-lite-translation project & update mcs-lite-script which creating empty directory. ([@evenchange4](https://github.com/evenchange4))

##### For more detail, please read [I18n workflow](https://github.com/MCS-Lite/mcs-lite/blob/master/docs/README.md#i18n-workflow).

##### react-intl-cra:
  
    ```
    # Before:
    $ react-intl-cra './src/**/*.js' './messages.json'
    # After:
    $ react-intl-cra './src/**/*.js' './path/to/messages.json'
    ```
  
* `mcs-lite-admin-web`, `mcs-lite-ui`
  * [#345](https://github.com/MCS-Lite/mcs-lite/pull/345) feat(Admin/UI): add new reset feature & New Panel Component. ([@evenchange4](https://github.com/evenchange4))

  Also, fix(UI/Dialog): use clickoutside & update center style

#### :bug: Bug Fix
* `babel-preset-mcs-lite`, `mcs-lite-admin-web`, `mcs-lite-connect`, `mcs-lite-mobile-web`, `mcs-lite-ui`, `react-intl-inject-hoc`
  * [#349](https://github.com/MCS-Lite/mcs-lite/pull/349) fix(stylis): update styled-componets to 2.0.1 and stylis 3 & remove placeholder css. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-admin-web`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#347](https://github.com/MCS-Lite/mcs-lite/pull/347) fix(prop-types): update node. ([@evenchange4](https://github.com/evenchange4))
  
  ```js
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  children: PropTypes.node,
  ```

#### :house: Internal
* `mcs-lite-admin-web`, `mcs-lite-mobile-web`
  * [#346](https://github.com/MCS-Lite/mcs-lite/pull/346) refactor(Routing-Cycle): update localCycle. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-06-05)

### Bump Versions

-   babel-preset-mcs-lite@0.3.2
-   eslint-config-mcs-lite@0.5.0  🚀
-   mcs-lite-admin-web@0.1.0
-   mcs-lite-connect@0.3.2
-   mcs-lite-icon@0.3.2
-   mcs-lite-mobile-web@0.4.2
-   mcs-lite-scripts@0.3.2
-   mcs-lite-theme@0.3.2
-   mcs-lite-ui@0.4.2
-   react-intl-cra@0.2.2
-   react-intl-inject-hoc@0.2.2

#### :rocket: New Feature
* `mcs-lite-admin-web`
  * [#343](https://github.com/MCS-Lite/mcs-lite/pull/343) feat(Admin/Service): add new service module for starting service. ([@evenchange4](https://github.com/evenchange4))
  * [#340](https://github.com/MCS-Lite/mcs-lite/pull/340) feat(Admin/Signup): add new Signup page. ([@evenchange4](https://github.com/evenchange4))
  * [#338](https://github.com/MCS-Lite/mcs-lite/pull/338) feat(Admin/Codemirror): code split with react-loadable. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-admin-web`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#337](https://github.com/MCS-Lite/mcs-lite/pull/337) feat(Admin/UI): add new Table Component & new admin page project & prettier 1.4. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-admin-web`
  * [#344](https://github.com/MCS-Lite/mcs-lite/pull/344) fix(Admin/Codemirror): set height auto. ([@evenchange4](https://github.com/evenchange4))
  * [#341](https://github.com/MCS-Lite/mcs-lite/pull/341) fix(Admin/Codemirror): Lazy load css cause styling problem.. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* Other
  * [#342](https://github.com/MCS-Lite/mcs-lite/pull/342) chore(CI): separate testing flow. ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `eslint-config-mcs-lite`, `mcs-lite-admin-web`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#339](https://github.com/MCS-Lite/mcs-lite/pull/339) feat(eslint): introduce eslint-plugin-jest [BREAKING]. ([@evenchange4](https://github.com/evenchange4))


```
$ yarn add eslint-plugin-jest --dev
```

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-06-02)

### Bump Versions

-   mcs-lite-introduction@0.2.4

#### :memo: Documentation
* `mcs-lite-introduction`
  * [#336](https://github.com/MCS-Lite/mcs-lite/pull/336) docs(intro): modify the 7697 example code and document.. ([@dariachen](https://github.com/dariachen))

#### Committers: 1
- Daria Chen ([dariachen](https://github.com/dariachen))

----

## Released (2017-05-31)

### Bump Versions

-   mcs-lite-introduction@0.2.3

#### :bug: Bug Fix
* `mcs-lite-introduction`
  * [#335](https://github.com/MCS-Lite/mcs-lite/pull/335) fix(gitbook): add npmrc for --save behavior of npm@5. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-05-31)

### Environment BREAKING 🚀

-   node >= 8.0.0
-   npm >= 5.0.0
-   yarn >= 0.24.6

### Bump Versions

-   babel-preset-mcs-lite@0.3.1
-   mcs-lite-connect@0.3.1
-   mcs-lite-icon@0.3.1
-   mcs-lite-introduction@0.2.1
-   mcs-lite-mobile-web@0.4.1
-   mcs-lite-scripts@0.3.1
-   mcs-lite-theme@0.3.1
-   mcs-lite-ui@0.4.1
-   react-intl-cra@0.2.1
-   react-intl-inject-hoc@0.2.1

#### :rocket: New Feature
* `mcs-lite-mobile-web`
  * [#327](https://github.com/MCS-Lite/mcs-lite/pull/327) feat(Mobile): introduce react-loadable for lazy loading. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#329](https://github.com/MCS-Lite/mcs-lite/pull/329) fix(routing-cycle): there are some bugs when clone origin location object. ([@evenchange4](https://github.com/evenchange4))
  * [#326](https://github.com/MCS-Lite/mcs-lite/pull/326) fix(proxy): add custom proxy config with CRA 1.0.0. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-mobile-web`
  * [#328](https://github.com/MCS-Lite/mcs-lite/pull/328) fix(react-loadable): add missing  webpack optimize. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-introduction`, `mcs-lite-mobile-web`
  * [#333](https://github.com/MCS-Lite/mcs-lite/pull/333) feat(node/npm): upgrade to node 8 and npm 5. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#332](https://github.com/MCS-Lite/mcs-lite/pull/332) chore(packages): update ramada 0.24 & other packages. ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#330](https://github.com/MCS-Lite/mcs-lite/pull/330) chore(ncu): update styled-components 2. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-05-24)

### Bump Versions

-   babel-preset-mcs-lite@0.3.0
-   eslint-config-mcs-lite@0.4.0
-   mcs-lite-connect@0.3.0
-   mcs-lite-design@0.2.0
-   mcs-lite-icon@0.3.0
-   mcs-lite-introduction@0.2.0
-   mcs-lite-mobile-web@0.4.0
-   mcs-lite-scripts@0.3.0
-   mcs-lite-theme@0.3.0
-   mcs-lite-ui@0.4.0
-   react-intl-cra@0.2.0
-   react-intl-inject-hoc@0.2.0
-   stylelint-config-mcs-lite@0.2.0

### Tools/Stacks BREAKING

-   React-scripts 1.0
-   lerna + yarn supported 2.0.0-rc5
-   webpack 2
-   storybook 3 alpha
-   styled-components 2.0.0-19

#### :rocket: New Feature
* Other
  * [#317](https://github.com/MCS-Lite/mcs-lite/pull/317) feat(learn): enable yarn & update rc4 🚀. ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `eslint-config-mcs-lite`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#314](https://github.com/MCS-Lite/mcs-lite/pull/314) feat(webpack2): update CRA 1.0 & storybook 3. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-introduction`
  * [#311](https://github.com/MCS-Lite/mcs-lite/pull/311) feat(gitbook): add some plugins. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-ui`
  * [#324](https://github.com/MCS-Lite/mcs-lite/pull/324) fix(CopyButton): fix animation. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-introduction`
  * [#319](https://github.com/MCS-Lite/mcs-lite/pull/319) fix(gitbook): switch from highlight.js to prismjs. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `mcs-lite-introduction`
  * [#322](https://github.com/MCS-Lite/mcs-lite/pull/322) docs(intro): compress images. ([@evenchange4](https://github.com/evenchange4))
  * [#320](https://github.com/MCS-Lite/mcs-lite/pull/320) docs(introduction): update content.. ([@dariachen](https://github.com/dariachen))
  * [#318](https://github.com/MCS-Lite/mcs-lite/pull/318) docs(introduction): update content with more graphic explanation.. ([@dariachen](https://github.com/dariachen))
  * [#312](https://github.com/MCS-Lite/mcs-lite/pull/312) docs(introduction): Feature/admin introduction. ([@dariachen](https://github.com/dariachen))

#### :house: Internal
* `mcs-lite-ui`
  * [#325](https://github.com/MCS-Lite/mcs-lite/pull/325) chore(styled-components): update to 19. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-ui`, `stylelint-config-mcs-lite`
  * [#323](https://github.com/MCS-Lite/mcs-lite/pull/323) chore(styled-components): update 18 & storybook 3-alpha4. ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `eslint-config-mcs-lite`, `mcs-lite-introduction`, `mcs-lite-mobile-web`, `mcs-lite-ui`, `react-intl-cra`, `stylelint-config-mcs-lite`
  * [#321](https://github.com/MCS-Lite/mcs-lite/pull/321) chore(CI): update scripts & use lerna rc.5. ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `mcs-lite-scripts`
  * [#316](https://github.com/MCS-Lite/mcs-lite/pull/316) chore(babel-preset-env): switch to env & update babel-preset-react-app 3. ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `mcs-lite-connect`, `mcs-lite-icon`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`, `react-intl-inject-hoc`
  * [#315](https://github.com/MCS-Lite/mcs-lite/pull/315) chore(packages): ncu update. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-introduction`
  * [#313](https://github.com/MCS-Lite/mcs-lite/pull/313) docs(introduction): add GA plug-in.. ([@dariachen](https://github.com/dariachen))

#### Committers: 2
- Daria Chen ([dariachen](https://github.com/dariachen))
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-05-12)

### Bump Versions

-   mcs-lite-connect@0.2.5
-   mcs-lite-icon@0.2.6
-   mcs-lite-mobile-web@0.3.8
-   mcs-lite-ui@0.3.8
-   react-intl-inject-hoc@0.1.10

#### :bug: Bug Fix
* `mcs-lite-connect`, `mcs-lite-mobile-web`, `mcs-lite-ui`, `react-intl-inject-hoc`
  * [#310](https://github.com/MCS-Lite/mcs-lite/pull/310) fix(recompose): update to 0.23.3. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-icon`
  * [#309](https://github.com/MCS-Lite/mcs-lite/pull/309) fix(mcs-lite-icon): move prop-types to dependency. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-ui`
  * [#308](https://github.com/MCS-Lite/mcs-lite/pull/308) feat(storybook): add option add-on.. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-05-10)

### Bump Versions

-   eslint-config-mcs-lite@0.3.0 🚨
-   mcs-lite-design@0.1.6
-   mcs-lite-icon@0.2.5
-   mcs-lite-introduction@0.1.7
-   mcs-lite-mobile-web@0.3.7
-   mcs-lite-ui@0.3.7

#### :rocket: New Feature
* `mcs-lite-design`
  * [#306](https://github.com/MCS-Lite/mcs-lite/pull/306) feat(Design): Add new Logout, Sync icons. ([@abby1002](https://github.com/abby1002))
  * [#305](https://github.com/MCS-Lite/mcs-lite/pull/305) feat(Design): add new Pause, Play, Refresh icons. ([@abby1002](https://github.com/abby1002))

#### :boom: Breaking Change
* `eslint-config-mcs-lite`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#307](https://github.com/MCS-Lite/mcs-lite/pull/307) fix(eslint): remove useless old rules [BREAKING]. ([@evenchange4](https://github.com/evenchange4))

  ** Break Eslint rules for development. **

#### :memo: Documentation
* `mcs-lite-introduction`
  * [#303](https://github.com/MCS-Lite/mcs-lite/pull/303) Feature/mcs lite intro v2. ([@dariachen](https://github.com/dariachen))

#### Committers: 3
- Abby Chiu ([abby1002](https://github.com/abby1002))
- Daria Chen ([dariachen](https://github.com/dariachen))
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

## Released (2017-04-27)

### Bump Versions

-   mcs-lite-mobile-web@0.3.6
-   mcs-lite-ui@0.3.6
-   react-intl-cra@0.1.10

#### :memo: Documentation
* Other
  * [#301](https://github.com/MCS-Lite/mcs-lite/pull/301) docs(License): update. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#300](https://github.com/MCS-Lite/mcs-lite/pull/300) chore(prettier): update. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

## Released (2017-04-19)

### Bump Versions

-   babel-preset-mcs-lite@0.2.2
-   eslint-config-mcs-lite@0.2.0 👈
-   mcs-lite-connect@0.2.4
-   mcs-lite-design@0.1.5
-   mcs-lite-icon@0.2.4
-   mcs-lite-introduction@0.1.6
-   mcs-lite-mobile-web@0.3.5
-   mcs-lite-scripts@0.2.4
-   mcs-lite-theme@0.2.5
-   mcs-lite-ui@0.3.5
-   react-intl-cra@0.1.9
-   react-intl-inject-hoc@0.1.9
-   stylelint-config-mcs-lite@0.1.3

#### :boom: Breaking Change
* `babel-preset-mcs-lite`, `eslint-config-mcs-lite`, `mcs-lite-connect`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-theme`, `mcs-lite-ui`, `react-intl-inject-hoc`, `stylelint-config-mcs-lite`
  * [#298](https://github.com/MCS-Lite/mcs-lite/pull/298) feat(prettier): introduce prettier [BREAKING]. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `babel-preset-mcs-lite`, `eslint-config-mcs-lite`, `mcs-lite-connect`, `mcs-lite-demo-nextjs`, `mcs-lite-design`, `mcs-lite-icon`, `mcs-lite-introduction`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-theme`, `mcs-lite-ui`, `react-intl-cra`, `react-intl-inject-hoc`, `stylelint-config-mcs-lite`
  * [#296](https://github.com/MCS-Lite/mcs-lite/pull/296) chore(package.json): move to MCS-Lite. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `babel-preset-mcs-lite`, `eslint-config-mcs-lite`, `mcs-lite-connect`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-theme`, `mcs-lite-ui`, `react-intl-inject-hoc`, `stylelint-config-mcs-lite`
  * [#298](https://github.com/MCS-Lite/mcs-lite/pull/298) feat(prettier): introduce prettier [BREAKING]. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-demo-nextjs`
  * [#297](https://github.com/MCS-Lite/mcs-lite/pull/297) chore(next.js): remove project. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#290](https://github.com/MCS-Lite/mcs-lite/pull/290) feat(flow): re-enable flow type checker. ([@evenchange4](https://github.com/evenchange4))
* Other
  * [#294](https://github.com/MCS-Lite/mcs-lite/pull/294) fix(CI): switch from circle to travis. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-ui`
  * [#291](https://github.com/MCS-Lite/mcs-lite/pull/291) chore(rechart): upgrade to 0.22.1. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 2
- Michael Hsu ([evenchange4](https://github.com/evenchange4))
- [greenkeeper[bot]](https://github.com/integration/greenkeeper)

----

## Released (2017-04-13)

### Bump Versions

-   babel-preset-mcs-lite@0.2.1
-   mcs-lite-connect@0.2.3
-   mcs-lite-demo-nextjs@0.2.4
-   mcs-lite-icon@0.2.3
-   mcs-lite-mobile-web@0.3.4
-   mcs-lite-scripts@0.2.3
-   mcs-lite-theme@0.2.4
-   mcs-lite-ui@0.3.4
-   react-intl-cra@0.1.8
-   react-intl-inject-hoc@0.1.8
-   stylelint-config-mcs-lite@0.1.2

#### :rocket: New Feature
* `babel-preset-mcs-lite`, `mcs-lite-demo-nextjs`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#279](https://github.com/MCS-Lite/mcs-lite/pull/279) feat(styled-components): upgrade to 0-14. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#285](https://github.com/MCS-Lite/mcs-lite/pull/285) fix(yarn): use npm. ([@evenchange4](https://github.com/evenchange4))
* Other
  * [#282](https://github.com/MCS-Lite/mcs-lite/pull/282) Update lerna to the latest version 🚀. ([@greenkeeper[bot]](https://github.com/integration/greenkeeper))
* `babel-preset-mcs-lite`, `mcs-lite-demo-nextjs`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#275](https://github.com/MCS-Lite/mcs-lite/pull/275) fix(styled-components): lock versions. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-ui`
  * [#286](https://github.com/MCS-Lite/mcs-lite/pull/286) refactor(CopyButton): add marble testing. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-icon`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#289](https://github.com/MCS-Lite/mcs-lite/pull/289) chore(react): Use the prop-types package from npm instead.. ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `mcs-lite-connect`, `mcs-lite-demo-nextjs`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-theme`, `mcs-lite-ui`, `react-intl-inject-hoc`, `stylelint-config-mcs-lite`
  * [#288](https://github.com/MCS-Lite/mcs-lite/pull/288) chore(ncu): update package.json. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#287](https://github.com/MCS-Lite/mcs-lite/pull/287) feat(travis): add travis ci yml file. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 2
- Michael Hsu ([evenchange4](https://github.com/evenchange4))
- [greenkeeper[bot]](https://github.com/integration/greenkeeper)

----

## Released (2017-03-31)

### Bump Versions

-   mcs-lite-demo-nextjs@0.2.3
-   mcs-lite-mobile-web@0.3.3
-   mcs-lite-ui@0.3.3

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#273](https://github.com/MCS-Lite/mcs-lite/pull/273) test(Mobile/localtime): setup TZ=‘UTC’. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-ui`
  * [#272](https://github.com/MCS-Lite/mcs-lite/pull/272) test(timezone): add unit test for timezone setup. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-30)

### Bump Versions

-   mcs-lite-demo-nextjs@0.2.2
-   mcs-lite-mobile-web@0.3.2
-   mcs-lite-ui@0.3.2

#### :boom: Breaking Change
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#269](https://github.com/MCS-Lite/mcs-lite/pull/269) refactor(DatetimePicker): replace moment.js with date-fns. ([@evenchange4](https://github.com/evenchange4))


  **DatetimePicker** is always displayed in local time now.

  ```diff
  <DatetimePicker
    defaultValue={1455780631722}
    onChange={}
  - utcOffset={8}
  />
  ```
  
  Dropping `moment.js` to optimize bundle size. 👋

#### :bug: Bug Fix
* `mcs-lite-ui`
  * [#270](https://github.com/MCS-Lite/mcs-lite/pull/270) test(DatetimePicker/CopyButton): fixed tests. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-29)

### Bump Versions

-   mcs-lite-demo-nextjs@0.2.1
-   mcs-lite-mobile-web@0.3.1
-   mcs-lite-ui@0.3.1

#### :bug: Bug Fix
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#268](https://github.com/MCS-Lite/mcs-lite/pull/268) fix(Picker/PullToRefresh): use deltaY for android chrome. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-ui`
  * [#267](https://github.com/MCS-Lite/mcs-lite/pull/267) fix(Input): wrong placeholder style. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-28)

### Bump Versions

-   babel-preset-mcs-lite@0.2.0
-   mcs-lite-connect@0.2.2
-   mcs-lite-demo-nextjs@0.2.0
-   mcs-lite-icon@0.2.2
-   mcs-lite-mobile-web@0.3.0
-   mcs-lite-scripts@0.2.2
-   mcs-lite-theme@0.2.3
-   mcs-lite-ui@0.3.0
-   react-intl-cra@0.1.7
-   react-intl-inject-hoc@0.1.7

#### :boom: Breaking Change
* `babel-preset-mcs-lite`, `mcs-lite-demo-nextjs`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#264](https://github.com/MCS-Lite/mcs-lite/pull/264) feat(Styled-Components): upgrade to 2.0.0-10. ([@evenchange4](https://github.com/evenchange4))

**You might need a End-to-End testing and updating the snapshot testing.**

```diff
"peerDependencies": {
+  "styled-components": "^2.0.0-10"
}
```

**You can use Component Selector now!**

```diff
// Postcss
-.dataChannelCard.withGraph > div:nth-child(2),
-.dataChannelCard.withGraph > div:nth-child(3) {
-  width: 240px;
-}

// Styled-Components
import DataChannelCard, { Body, Footer } from '../DataChannelCard';

const StyledDataChannelCard = styled(DataChannelCard)`
+ ${Body}, ${Footer} {
+   width: ${props => props.isHistoryShow ? '240px' : 'initial'};
+ }
`;
```


#### :house: Internal
* `mcs-lite-ui`
  * [#266](https://github.com/MCS-Lite/mcs-lite/pull/266) feat(mcs-lite-ui): export all internal components. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-27)

### Bump Versions

-   babel-preset-mcs-lite@0.1.4
-   mcs-lite-connect@0.2.1
-   mcs-lite-demo-nextjs@0.1.14
-   mcs-lite-icon@0.2.1
-   mcs-lite-mobile-web@0.2.8
-   mcs-lite-scripts@0.2.1
-   mcs-lite-theme@0.2.2
-   mcs-lite-ui@0.2.6
-   react-intl-cra@0.1.6
-   react-intl-inject-hoc@0.1.6

#### :bug: Bug Fix
* `mcs-lite-ui`
  * [#263](https://github.com/MCS-Lite/mcs-lite/pull/263) fix(Mobile/Header): use portal to manage z-index problem. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `babel-preset-mcs-lite`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#262](https://github.com/MCS-Lite/mcs-lite/pull/262) chore(ncu): update normalize.css to 6. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-24)

### Bump Versions

-   mcs-lite-demo-nextjs@0.1.13
-   mcs-lite-introduction@0.1.5
-   mcs-lite-mobile-web@0.2.7
-   mcs-lite-ui@0.2.5

#### :rocket: New Feature
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#260](https://github.com/MCS-Lite/mcs-lite/pull/260) feat(Select): add new native select component & support active props for Button and Input. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#258](https://github.com/MCS-Lite/mcs-lite/pull/258) fix(react-helmet): use plain HTML for 5.0.0. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#256](https://github.com/MCS-Lite/mcs-lite/pull/256) fix(storybook/react-helmet): fix testing. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `mcs-lite-introduction`
  * [#257](https://github.com/MCS-Lite/mcs-lite/pull/257) feat(githook): add 7697 example gcc. ([@dariachen](https://github.com/dariachen))
  * [#254](https://github.com/MCS-Lite/mcs-lite/pull/254) docs(mcs-lite-intro): add example code for LinkIt 7697 Arduino.. ([@dariachen](https://github.com/dariachen))

#### Committers: 2
- Daria Chen ([dariachen](https://github.com/dariachen))
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-21)

### Bump Versions

-   mcs-lite-demo-nextjs@0.1.12
-   mcs-lite-mobile-web@0.2.6
-   mcs-lite-theme@0.2.1
-   mcs-lite-ui@0.2.4

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#253](https://github.com/MCS-Lite/mcs-lite/pull/253) fix(eslint): upgrade eslint-plugin-react to 6.10.3. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-theme`, `mcs-lite-ui`
  * [#252](https://github.com/MCS-Lite/mcs-lite/pull/252) fix(Code): add custom style for react-syntax-highlighter. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-ui`
  * [#250](https://github.com/MCS-Lite/mcs-lite/pull/250) fix(recompose/rx): do use global setting. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-20)

### Bump Versions

-   mcs-lite-mobile-web@0.2.5

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#249](https://github.com/MCS-Lite/mcs-lite/pull/249) fix(WebSocket): use window.SOCKET_PORT. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-20)

### Bump Versions

-   mcs-lite-demo-nextjs@0.1.11
-   mcs-lite-mobile-web@0.2.4
-   mcs-lite-ui@0.2.3

#### :rocket: New Feature
* `mcs-lite-mobile-web`
  * [#247](https://github.com/MCS-Lite/mcs-lite/pull/247) feat(WebSocket PORT):  Injecting Data from the Server into the Page.. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-ui`
  * [#248](https://github.com/MCS-Lite/mcs-lite/pull/248) fix(Menu): add min-width: 80. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-20)

### Bump Versions

-   mcs-lite-demo-nextjs@0.1.10
-   mcs-lite-mobile-web@0.2.3
-   mcs-lite-ui@0.2.2

#### :bug: Bug Fix
* `mcs-lite-ui`
  * [#246](https://github.com/MCS-Lite/mcs-lite/pull/246) fix(Toast): remove height 100%. ([@evenchange4](https://github.com/evenchange4))
  * [#240](https://github.com/MCS-Lite/mcs-lite/pull/240) fix(Picker): Update Hammer for android chrome Pan problem. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#245](https://github.com/MCS-Lite/mcs-lite/pull/245) chore(ncu): fix eslint-plugin-react. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#239](https://github.com/MCS-Lite/mcs-lite/pull/239) fix(Trigger): hide entry at phase 1. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-ui`
  * [#242](https://github.com/MCS-Lite/mcs-lite/pull/242) test(Overlay/Pick/Dialog): add more test for mcs-lite-ui. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 2
- Michael Hsu ([evenchange4](https://github.com/evenchange4))
- [greenkeeper[bot]](https://github.com/integration/greenkeeper)

----

## Released (2017-03-17)

### Bump Versions

-   mcs-lite-mobile-web@0.2.2

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#238](https://github.com/MCS-Lite/mcs-lite/pull/238) fix(DeviceDetail): Pull-to-referesh not working & update Device banner image url. ([@evenchange4](https://github.com/evenchange4))
  * [#237](https://github.com/MCS-Lite/mcs-lite/pull/237) feat(cyclejs): update rxjs-run to 7 (optimize bundle size) [#179]. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-16)

### Bump Versions

-   babel-preset-mcs-lite@0.1.3
-   mcs-lite-connect@0.2.0
-   mcs-lite-demo-nextjs@0.1.9
-   mcs-lite-design@0.1.4
-   mcs-lite-icon@0.2.0
-   mcs-lite-mobile-web@0.2.1
-   mcs-lite-scripts@0.2.0
-   mcs-lite-theme@0.2.0
-   mcs-lite-ui@0.2.1
-   react-intl-cra@0.1.5
-   react-intl-inject-hoc@0.1.5

#### :rocket: New Feature
* `mcs-lite-connect`, `mcs-lite-mobile-web`
  * [#234](https://github.com/MCS-Lite/mcs-lite/pull/234) feat(mcs-lite-connect): add isWebSocketClose feature [BREAKING]. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-ui`
  * [#235](https://github.com/MCS-Lite/mcs-lite/pull/235) feat(Notification): add new component & Update Toast style. ([@evenchange4](https://github.com/evenchange4))
  * [#232](https://github.com/MCS-Lite/mcs-lite/pull/232) feat(Code): add new component. ([@evenchange4](https://github.com/evenchange4))
  * [#230](https://github.com/MCS-Lite/mcs-lite/pull/230) feat(TabItem): add new component. ([@evenchange4](https://github.com/evenchange4))
  * [#229](https://github.com/MCS-Lite/mcs-lite/pull/229) feat(CopyButton): add new component. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-scripts`, `react-intl-cra`
  * [#220](https://github.com/MCS-Lite/mcs-lite/pull/220) feat(react-intl-cra): output with filepath & update README. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-scripts`, `mcs-lite-ui`
  * [#228](https://github.com/MCS-Lite/mcs-lite/pull/228) feat(mcs-lite-icon): support for react-svg-morph [BREAKING]. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-theme`, `mcs-lite-ui`
  * [#224](https://github.com/MCS-Lite/mcs-lite/pull/224) feat(Button): add new square / round / size props. ([@evenchange4](https://github.com/evenchange4))

#### :boom: Breaking Change
* `mcs-lite-connect`, `mcs-lite-mobile-web`
  * [#234](https://github.com/MCS-Lite/mcs-lite/pull/234) feat(mcs-lite-connect): add isWebSocketClose feature [BREAKING]. ([@evenchange4](https://github.com/evenchange4))
  
  Replace the third argument of `connectSocket` with `propsMapper: Function`.

  ```diff
  -    'sendMessage', // propsName
  +    ({ readyState, send, createWebSocket }) => ({
  +      sendMessage: send,
  +      isWebSocketClose: readyState.sender === 3 || readyState.viewer === 3,
  +      reconnect: createWebSocket,
  +    }),
  ```
  
* `mcs-lite-scripts`, `mcs-lite-ui`
  * [#228](https://github.com/MCS-Lite/mcs-lite/pull/228) feat(mcs-lite-icon): support for react-svg-morph [BREAKING]. ([@evenchange4](https://github.com/evenchange4))
  
  Switch `functional` to `class` component 
  
* `mcs-lite-mobile-web`, `mcs-lite-theme`, `mcs-lite-ui`
  * [#224](https://github.com/MCS-Lite/mcs-lite/pull/224) feat(Button): add new square / round / size props. ([@evenchange4](https://github.com/evenchange4))

  ```diff
  - min-height: ${props => props.theme.base.inputHeight};
  + min-height: ${props => props.theme.height.normal};
  ```

#### :bug: Bug Fix
* `mcs-lite-ui`
  * [#227](https://github.com/MCS-Lite/mcs-lite/pull/227) fix(DataChannelCard): support for empty string. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#223](https://github.com/MCS-Lite/mcs-lite/pull/223) fix(localTimeFormat): switch to date-fns. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#221](https://github.com/MCS-Lite/mcs-lite/pull/221) feat(date-fp): fix timezone problem. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `mcs-lite-mobile-web`, `mcs-lite-scripts`, `react-intl-cra`
  * [#220](https://github.com/MCS-Lite/mcs-lite/pull/220) feat(react-intl-cra): output with filepath & update README. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-design`
  * [#233](https://github.com/MCS-Lite/mcs-lite/pull/233) chore(mcs-lite-design): update 1024 image & add 128 size.. ([@abby1002](https://github.com/abby1002))
* `babel-preset-mcs-lite`, `mcs-lite-mobile-web`
  * [#231](https://github.com/MCS-Lite/mcs-lite/pull/231) chore(ncu): upgrade. ([@evenchange4](https://github.com/evenchange4))
* Other
  * [#225](https://github.com/MCS-Lite/mcs-lite/pull/225) Update codecov to the latest version 🚀. ([@greenkeeper[bot]](https://github.com/integration/greenkeeper))
  * [#226](https://github.com/MCS-Lite/mcs-lite/pull/226) feat(Danger.js): Warn if there is no labels. ([@greenkeeper[bot]](https://github.com/integration/greenkeeper))

#### Committers: 3
- Abby Chiu ([abby1002](https://github.com/abby1002))
- Michael Hsu ([evenchange4](https://github.com/evenchange4))
- [greenkeeper[bot]](https://github.com/integration/greenkeeper)

----

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
  * [#217](https://github.com/MCS-Lite/mcs-lite/pull/217) feat(Signin): add errorMessage feature. ([@evenchange4](https://github.com/evenchange4))
  * [#216](https://github.com/MCS-Lite/mcs-lite/pull/216) feat(Password): add validators. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-connect`, `mcs-lite-mobile-web`
  * [#211](https://github.com/MCS-Lite/mcs-lite/pull/211) feat(Datapoints): add query feautre. ([@evenchange4](https://github.com/evenchange4))

#### :boom: Breaking Change
* `mcs-lite-mobile-web`
  * [#217](https://github.com/MCS-Lite/mcs-lite/pull/217) feat(Signin): add errorMessage feature. ([@evenchange4](https://github.com/evenchange4))
  
  Replaced url `/signin` with `/login`.
  
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#215](https://github.com/MCS-Lite/mcs-lite/pull/215) feat(DataChannelAdapter): update type with uppercase. ([@evenchange4](https://github.com/evenchange4))
  
  ```diff
  -        type: 'submit'|'change'|'clear', // event type
  +        type: 'SUBMIT'|'CHANGE'|'CLEAR', // event type
  ```
  
  * [#214](https://github.com/MCS-Lite/mcs-lite/pull/214) fix(DataChannelAdapter): handle default value of dataChannelProps.values. ([@evenchange4](https://github.com/evenchange4))
  
  ```diff
  -                    values: datachannel.datapoints.values || {},
  +                    values: datachannel.datapoints.values,
  ```

#### :bug: Bug Fix
* `mcs-lite-mobile-web`
  * [#219](https://github.com/MCS-Lite/mcs-lite/pull/219) fix(CSS): remove duplicate normalize.css. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-ui`
  * [#209](https://github.com/MCS-Lite/mcs-lite/pull/209) test(DataChannelAdapter): add tests for eventHandler. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#214](https://github.com/MCS-Lite/mcs-lite/pull/214) fix(DataChannelAdapter): handle default value of dataChannelProps.values. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `babel-preset-mcs-lite`, `mcs-lite-connect`, `mcs-lite-scripts`, `mcs-lite-theme`, `mcs-lite-ui`, `react-intl-inject-hoc`
  * [#218](https://github.com/MCS-Lite/mcs-lite/pull/218) chore(ncu): upgrade npm_modules (babel, d3-color). ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `babel-preset-mcs-lite`, `mcs-lite-connect`, `mcs-lite-scripts`, `mcs-lite-theme`, `mcs-lite-ui`, `react-intl-inject-hoc`
  * [#218](https://github.com/MCS-Lite/mcs-lite/pull/218) chore(ncu): upgrade npm_modules (babel, d3-color). ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#210](https://github.com/MCS-Lite/mcs-lite/pull/210) feat(babel-preset): switch to babel-preset of CRA. ([@evenchange4](https://github.com/evenchange4))

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
  * [#205](https://github.com/MCS-Lite/mcs-lite/pull/205) feat(mcs-lite-introduction): change the folder name to lower cases and add i18n feature. ([@dariachen](https://github.com/dariachen))

#### :bug: Bug Fix
* `mcs-lite-ui`
  * [#208](https://github.com/MCS-Lite/mcs-lite/pull/208) test(DataChannelAdapter): add tests. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Daria Chen ([dariachen](https://github.com/dariachen))
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-03-09)

### Bump Versions

-   mcs-lite-introduction@0.1.3

#### :bug: Bug Fix
* `mcs-lite-introduction`
  * [#207](https://github.com/MCS-Lite/mcs-lite/pull/207) fix(gitbook/pack): use .bookignore instead of rm -rf. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-introduction`
  * [#206](https://github.com/MCS-Lite/mcs-lite/pull/206) chore(gitbook): remove package.json. ([@evenchange4](https://github.com/evenchange4))

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
  * [#199](https://github.com/MCS-Lite/mcs-lite/pull/199) feat(App/Title): setup react-helmet at root App container. ([@evenchange4](https://github.com/evenchange4))
  * [#194](https://github.com/MCS-Lite/mcs-lite/pull/194) feat(Module/Datapoints): add new History chart for data channels. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-design`, `mcs-lite-mobile-web`
  * [#197](https://github.com/MCS-Lite/mcs-lite/pull/197) feat(Logo/icons): add iPhone icons for safari add-to-homescreen feature. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `mcs-lite-introduction`
  * [#202](https://github.com/MCS-Lite/mcs-lite/pull/202) docs(Resources): create package for each documents.. ([@dariachen](https://github.com/dariachen))

#### :house: Internal
* `mcs-lite-mobile-web`
  * [#200](https://github.com/MCS-Lite/mcs-lite/pull/200) test(i18n): extract messages.tests. ([@evenchange4](https://github.com/evenchange4))

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
  * [#191](https://github.com/MCS-Lite/mcs-lite/pull/191) fix(Mobile/publish): build at prepublish-phase so that we can get current version of packages.json.. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-mobile-web`
  * [#188](https://github.com/MCS-Lite/mcs-lite/pull/188) test(Module/UI): add more toast test. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-mobile-web`
  * [#191](https://github.com/MCS-Lite/mcs-lite/pull/191) fix(Mobile/publish): build at prepublish-phase so that we can get current version of packages.json.. ([@evenchange4](https://github.com/evenchange4))
  * [#189](https://github.com/MCS-Lite/mcs-lite/pull/189) chore(ncu): upgrade cycle & cra without any breaking changes. ([@evenchange4](https://github.com/evenchange4))

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
  * [#187](https://github.com/MCS-Lite/mcs-lite/pull/187) feat(DataChannelDetail): enable websocket. ([@evenchange4](https://github.com/evenchange4))
* `babel-preset-mcs-lite`, `mcs-lite-ui`
  * [#184](https://github.com/MCS-Lite/mcs-lite/pull/184) feat(babel-plugin): support for reducing bundle size of recompose and recharts. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`
  * [#178](https://github.com/MCS-Lite/mcs-lite/pull/178) refactor(Module/Side-effects): replace redux-observable with redux-cycles. ([@evenchange4](https://github.com/evenchange4))

#### :boom: Breaking Change
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`
  * [#178](https://github.com/MCS-Lite/mcs-lite/pull/178) refactor(Module/Side-effects): replace redux-observable with redux-cycles. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-connect`, `mcs-lite-demo-nextjs`, `mcs-lite-design`, `mcs-lite-icon`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-theme`, `react-intl-cra`, `react-intl-inject-hoc`
  * [#181](https://github.com/MCS-Lite/mcs-lite/pull/181) fix(Building): timeout problem. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#186](https://github.com/MCS-Lite/mcs-lite/pull/186) feat(datetimeFormat): replace moment with date-fp. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#177](https://github.com/MCS-Lite/mcs-lite/pull/177) refactor(auth/module): handle error. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-demo-nextjs`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#176](https://github.com/MCS-Lite/mcs-lite/pull/176) feat(package): ncu & update redux-observable to 0.14. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`
  * [#178](https://github.com/MCS-Lite/mcs-lite/pull/178) refactor(Module/Side-effects): replace redux-observable with redux-cycles. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-ui`, `stylelint-config-mcs-lite`
  * [#183](https://github.com/MCS-Lite/mcs-lite/pull/183) chore(ncu): ncu-update. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-connect`, `mcs-lite-demo-nextjs`, `mcs-lite-design`, `mcs-lite-icon`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-theme`, `react-intl-cra`, `react-intl-inject-hoc`
  * [#181](https://github.com/MCS-Lite/mcs-lite/pull/181) fix(Building): timeout problem. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`
  * [#178](https://github.com/MCS-Lite/mcs-lite/pull/178) refactor(Module/Side-effects): replace redux-observable with redux-cycles. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#177](https://github.com/MCS-Lite/mcs-lite/pull/177) refactor(auth/module): handle error. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-demo-nextjs`, `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#176](https://github.com/MCS-Lite/mcs-lite/pull/176) feat(package): ncu & update redux-observable to 0.14. ([@evenchange4](https://github.com/evenchange4))

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
  * [#174](https://github.com/MCS-Lite/mcs-lite/pull/174) feat(mcs-lite-connect): extract web-socket hoc. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#170](https://github.com/MCS-Lite/mcs-lite/pull/170) feat(Device/WebSocket): upload datapoint use websocket.. ([@evenchange4](https://github.com/evenchange4))

#### :memo: Documentation
* `mcs-lite-design`, `mcs-lite-mobile-web`
  * [#172](https://github.com/MCS-Lite/mcs-lite/pull/172) chore(logo): update favicon and manifest.json. ([@evenchange4](https://github.com/evenchange4))
  * [#171](https://github.com/MCS-Lite/mcs-lite/pull/171) chore(LOGO): add logo images to mcs-lite-design. ([@evenchange4](https://github.com/evenchange4))

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
  * [#169](https://github.com/MCS-Lite/mcs-lite/pull/169) fix(babel-preset-mcs-lite): replace babel-plugin-lodash with babel-plugin-import. ([@evenchange4](https://github.com/evenchange4))

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
  * [#164](https://github.com/MCS-Lite/mcs-lite/pull/164) feat(Module): add error handler. ([@evenchange4](https://github.com/evenchange4))
  * [#156](https://github.com/MCS-Lite/mcs-lite/pull/156) feat(Password): add changing password feature.. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#155](https://github.com/MCS-Lite/mcs-lite/pull/155) feat(Signout): require confirm before leaving. ([@evenchange4](https://github.com/evenchange4))

#### :nail_care: Enhancement
* `mcs-lite-mobile-web`
  * [#162](https://github.com/MCS-Lite/mcs-lite/pull/162) refactor(modules/device): use startWith. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* `mcs-lite-fetch-rx`, `mcs-lite-mobile-web`, `mcs-lite-scripts`, `mcs-lite-ui`
  * [#165](https://github.com/MCS-Lite/mcs-lite/pull/165) chore(Jest): upgrade to jest 19. ([@evenchange4](https://github.com/evenchange4))
* Other
  * [#158](https://github.com/MCS-Lite/mcs-lite/pull/158) chore(danger): use danger run -v. ([@evenchange4](https://github.com/evenchange4))
  * [#153](https://github.com/MCS-Lite/mcs-lite/pull/153) chore(dangerJS): update rules for pot checker. ([@evenchange4](https://github.com/evenchange4))
  * [#149](https://github.com/MCS-Lite/mcs-lite/pull/149) feat(dangerJS): introduce danger js. ([@evenchange4](https://github.com/evenchange4))

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
  * [#147](https://github.com/MCS-Lite/mcs-lite/pull/147) fix(DataPointAreaChart): typo naming. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#147](https://github.com/MCS-Lite/mcs-lite/pull/147) fix(DataPointAreaChart): typo naming. ([@evenchange4](https://github.com/evenchange4))

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
  * [#146](https://github.com/MCS-Lite/mcs-lite/pull/146) feat(DataPointAreaChart): add new Chart component. ([@evenchange4](https://github.com/evenchange4))

#### :bug: Bug Fix
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#144](https://github.com/MCS-Lite/mcs-lite/pull/144) fix(Jest): add --runInBand for jest test in circle ci. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#139](https://github.com/MCS-Lite/mcs-lite/pull/139) fix(Mobile): remove source map. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* Other
  * [#145](https://github.com/MCS-Lite/mcs-lite/pull/145) chore(License): add license-checker. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`, `mcs-lite-ui`
  * [#144](https://github.com/MCS-Lite/mcs-lite/pull/144) fix(Jest): add --runInBand for jest test in circle ci. ([@evenchange4](https://github.com/evenchange4))
* `mcs-lite-mobile-web`
  * [#139](https://github.com/MCS-Lite/mcs-lite/pull/139) fix(Mobile): remove source map. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))

----

## Released (2017-02-21)

### Bump Versions

-   `mcs-lite-mobile-web`: `0.0.2`
-   `react-intl-inject-hoc`: `0.0.1`

#### :rocket: New Feature
* `mcs-lite-mobile-web`, `react-intl-inject-hoc`
  * [#135](https://github.com/MCS-Lite/mcs-lite/pull/135) feat(react-intl-inject-hoc): add new package. ([@evenchange4](https://github.com/evenchange4))

#### :house: Internal
* Other
  * [#133](https://github.com/MCS-Lite/mcs-lite/pull/133) chore(circle): remove pack scripts. ([@evenchange4](https://github.com/evenchange4))

#### Committers: 1
- Michael Hsu ([evenchange4](https://github.com/evenchange4))
