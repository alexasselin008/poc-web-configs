/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
        "plugin:@alexasselin/eslint-plugin/recommended",
        "plugin:@alexasselin/eslint-plugin/typescript"
    ],
    env: {
        commonjs: true,
        node: true
    },
    parserOptions: { 
        // Required for certain syntax usages
        "ecmaVersion": 2020
    }
};
