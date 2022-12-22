const requireIndex = require("requireindex");

/** @type {import('eslint').ESLint.Plugin} */
const config = {
    rules: requireIndex(__dirname + "/rules"),
    configs: requireIndex(__dirname + "/config")
};

module.exports = config;