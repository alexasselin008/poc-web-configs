import {ESLint} from "eslint";

const plugin: ESLint.Plugin = {
    rules: { 
        "prefer-cx": require("./lib/rules/prefer-cx"),
        "restrict-full-import": require("./lib/rules/restrict-full-import"),
        "strict-css-modules-names": require("./lib/rules/strict-css-modules-names"),
    },
    configs: {
        jest: require("./lib/config/jest"),
        lodash: require("./lib/config/lodash"),
        mdx: require("./lib/config/mdx"),
        nextjs: require("./lib/config/nextjs"),
        react: require("./lib/config/react"),
        recommended: require("./lib/config/recommended"),
        "sort-imports": require("./lib/config/sort-imports"),
        "storybook-csf": require("./lib/config/storybook-csf"),
        storybook: require("./lib/config/storybook"),
        "testing-library": require("./lib/config/testing-library"),
        typescript: require("./lib/config/typescript"),
    }
}

export = plugin;