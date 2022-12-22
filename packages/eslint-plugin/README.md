# `@sharegate/eslint-plugin`

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/@sharegate%eslint-plugin.svg)](https://badge.fury.io/js/@sharegate%eslint-plugin.svg)

ShareGate’s ESLint configs.

## Installation

Install the package.

**With npm**
```shell
npm i --save-dev @sharegate/eslint-plugin
```

**With yarn**
```shell
yarn add --dev @sharegate/eslint-plugin
```

## Usage

TODO

## Plugin-Provided Rules 

This plugin provides the following custom rules, which are included as appropriate in all core linting configs:

- [prefer-cx](docs/rules/prefer-cx.md): Prefer cx over classnames as the name of classnames imports.
- [restrict-full-import](docs/rules/restrict-full-import.md): Prevent importing the entirety of a package.
- [strict-css-modules-names](docs/rules/strict-css-modules-names.md): CSS modules should have the same file name (minus the file extension) as the scoped component and be located in the same folder.
