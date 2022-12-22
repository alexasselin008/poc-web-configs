const requireIndex = require("requireindex");

/** @type {import('eslint').ESLint.Plugin} */
module.exports = {
    rules: requireIndex(__dirname + "/rules"),
    configs: requireIndex(__dirname + "/config")
};