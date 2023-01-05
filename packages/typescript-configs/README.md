# `@sharegate/typescript-configs`

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/@sharegate%typescript-configs.svg)](https://badge.fury.io/js/@sharegate%typescript-configs.svg)

This packages provides a base TypeScript configuration depending on the JavaScript runtime environment which you intend to run your code in. 
These are tsconfig.json files which your project extends from which simplifies your tsconfig.json by handling the runtime support.

## Installation

Install the package.

**With npm**
```shell
npm i --save-dev @sharegate/typescript-configs
```

**With yarn**
```shell
yarn add --dev @sharegate/typescript-configs
```

## Usage

### Create React App Project

To start, create a tsconfig.json in the root of your project.

```json
{
  "extends": "@sharegate/typescript-configs/cra.json",
  "compilerOptions": {
    "baseUrl": ".",
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### NextJS Project

```json
{
  "extends": "@sharegate/typescript-configs/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### React Library Project

```json
{
  "extends": "@sharegate/typescript-configs/react-library.json",
  "compilerOptions": {
    "baseUrl": ".",
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### Other type of React Project

```json
{
  "extends": "@sharegate/typescript-configs/react.json",
  "compilerOptions": {
    "baseUrl": ".",
  }
}
```

### All Other TypeScript Projects

```json
{
  "extends": "@sharegate/typescript-configs/base.json",
  "compilerOptions": {
    "baseUrl": ".",
  }
}
    