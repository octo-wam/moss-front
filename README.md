# WAM MOSS front

[![Build Status](https://travis-ci.com/octo-wam/moss-front.svg?branch=master)](https://travis-ci.com/octo-wam/moss-front)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6a2d1ce1-1393-4ce3-b89c-d7d5ca98ff32/deploy-status)](https://app.netlify.com/sites/octo-moss/deploys)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![eslint](https://img.shields.io/badge/eslint-v6.5.1-green)](https://prettier.io)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![commitlint](https://img.shields.io/badge/commitlint-v8.1.0-green)](https://www.npmjs.com/package/commitlint)
[![huky](https://img.shields.io/badge/husyk-v3.0.8-blue)](https://www.npmjs.com/package/husky)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## description

This section is **in progress**

## Prerequisites

- `Nodejs XX.XX.X` or higher is installed on your desktop **WIP**

## Installation

:one: Clone this whiteapp and change client_name

```bash
 git clone url <client_name>
```

:two: Bind this project to your target repository on [Github](./) or [gitlab](./)

```bash
    cd <client_name>
    rm -rf .git
    git init
    git remote add origin https://<github_or_gitlab_url>/<groupe>/<target_repo_name>.git
    git add .
    git commit -m "chore: initial commit"
    git push -u origin master
```

:three: Install dependencies by running `npm install` or `yarn install` command

:four: Launch your app and start to develop by running `npm start` or `yarn start`

## Usage

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### `yarn lint`

[![eslint](https://img.shields.io/badge/eslint-v6.5.1-green)](https://eslint.org)

Launches the lint checks and prettier formating on the whole project.

#### `yarn lint:fix`

Launches the lint checks and prettier formating on the whole project and fix errors raised by lint checker

### Others tools

- [Husky](https://github.com/typicode/husky) (Git hooks made easy)
  - **commit-msg** hook : run [commintlint](https://github.com/conventional-changelog/commitlint) , a linter which checks if your commit messages meet the [conventional commit](https://www.conventionalcommits.org/) format.
  - **pre-commit** hook: run [lint-staged](https://github.com/okonet/lint-staged) which run eslint, prettier, tsc against staged files before comminting them. Ensure that all you code that you want to commit respect your guidelines

## Contributing

See [Contributing guidelines](./CONTRIBUTING.md)

## VSCode plugins

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Sass Formatter](https://marketplace.visualstudio.com/items?itemName=sasa.vscode-sass-format)
- [TypeScript Import Sorter](https://marketplace.visualstudio.com/items?itemName=mike-co.import-sorter)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Markdown Lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
