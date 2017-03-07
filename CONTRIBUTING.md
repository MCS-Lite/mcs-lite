# MCS Lite contributing

> First of all, thank you for contributing. It’s appreciated. 🙌

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests.

## To submit a pull request

1. Open a GitHub issue before doing significant amount of work.
2. Clone the repo. If it was already cloned, then git pull to get the latest from master.
4. Run `npm install` before anything else, and wait.
5. Write code.
6. Run `./tasks/test.sh` to lint and test. Don’t commit before fixing all errors and warnings.
7. Commit with the [Git Commit Msg Convention](http://karma-runner.github.io/1.0/dev/git-commit-msg.html).
8. Make a pull request.


## To release new versions

1. Checkout `master` branch.
2. Update CHANGELOG.md by copying the results of `$ lerna-changelog`.
3. Run `$ npm run release`.
4. Add the `Bump Verions` section to CHANGELOG.md. ([#26](https://github.com/lerna/lerna-changelog/issues/26))
