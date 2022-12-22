const postcss = require('postcss');

/** @type {import('postcss-preset-env').pluginOptions} */
const PRESET_ENV_OPTIONS = {
                autoprefixer: {
                    flexbox: "no-2009"
                },
                stage: 3,
                features: {
                    "nesting-rules": true
                }
              };

const PXTOREM_OPTIONS = {
                rootValue: 16,
                propList: [
                    "font-size",
                    "line-height",
                    "letter-spacing",
                    "margin",
                    "margin-top",
                    "margin-bottom",
                    "margin-left",
                    "margin-right",
                    "padding",
                    "padding-top",
                    "padding-bottom",
                    "padding-left",
                    "padding-right",
                    "width",
                    "height",
                    "border",
                    "border-top",
                    "border-bottom",
                    "border-left",
                    "border-right"
                ]
            };

/** @type {import('postcss').Plugin} */
const plugin = ({presetEnvOptions = PRESET_ENV_OPTIONS, pxToRemOptions = PXTOREM_OPTIONS}) => {
  return {
    postcssPlugin: '@alexasselin/postcss-plugin',
    ...postcss([
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')(presetEnvOptions),
      require('postcss-pxtorem')(pxToRemOptions),
    ]),
  }
}

module.exports = plugin;
module.exports.postcss = true;