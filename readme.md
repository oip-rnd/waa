<p align="center">
  <img src="https://github.com/acidjazz/waa/raw/development/static/share.png" alt="WAA Logo"/>
</p>

> Learn about the demand for apartments in your area

[![GitHub issues](https://img.shields.io/github/issues/acidjazz/waa.svg)](https://github.com/acidjazz/waa/issues)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/acidjazz/waa/master/license)
[![CircleCI](https://img.shields.io/circleci/project/github/acidjazz/waa.svg)](https://circleci.com/gh/acidajzz/waa/)
[![Coverage Status](https://coveralls.io/repos/github/acidjazz/waa/badge.svg?branch=development)](https://coveralls.io/github/acidjazz/waa?branch=staging)
[![Dependency Status](https://gemnasium.com/badges/github.com/acidjazz/waa.svg)](https://gemnasium.com/github.com/acidjazz/waa)
[![aeonian status](https://img.shields.io/badge/%C3%A6onian-deployed-green.svg)](https://github.com/acidjazz/aeonian)

## Build Setup
* Clone this repository 
```bash
git clone git@github.com:acidjazz/waa.git
```
* Install dependencies
```bash
yarn install
```
* Your dev environment is now served with [HMR](https://webpack.github.io/docs/hot-module-replacement.html) at http://localhost:3000
```bash
yarn dev
```

## Deployment
* All deployment is setup using the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) workflow with [aeonian](https://github.com/acidjazz/aeonian)
 * Branch [development](https://github.com/acidjazz/waa/tree/development) merges deploy to http://development.weareapartments.org/
 * Branch [staging](https://github.com/acidjazz/waa/tree/staging) merges deploy to http://staging.weareapartments.org/
 * Branch [master](https://github.com/acidjazz/waa/tree/master) merges deploy to http://weareapartments.org/

