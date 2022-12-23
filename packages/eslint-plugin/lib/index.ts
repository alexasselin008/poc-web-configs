import requireIndex from "requireindex";
import {ESLint} from "eslint";

export const plugin: ESLint.Plugin = {
    rules: requireIndex(__dirname + "/rules"),
    configs: requireIndex(__dirname + "/config")
}