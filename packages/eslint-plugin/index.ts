import requireIndex from "requireindex";
import {ESLint} from "eslint";

const plugin: ESLint.Plugin = {
    rules: requireIndex("./lib/rules"),
    configs: requireIndex("./lib/config")
}

export default plugin;