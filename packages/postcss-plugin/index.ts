import type { PluginCreator } from "postcss";
import postcssPresetEnv, { pluginOptions } from "postcss-preset-env";
import postcssFlexBugsFixes from "postcss-flexbugs-fixes"
import postcssPxtorem from "postcss-pxtorem";


const PRESET_ENV_OPTIONS: pluginOptions = {
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

const DEFAULT_OPTIONS = {	
    presetEnvOptions: PRESET_ENV_OPTIONS,
    pxtoremOptions: PXTOREM_OPTIONS
}

const plugin: PluginCreator<typeof DEFAULT_OPTIONS> = ({presetEnvOptions, pxtoremOptions} = DEFAULT_OPTIONS) => {
    
    return {
        postcssPlugin: "@alexasselin/postcss-plugin1",
        plugins: [
            postcssFlexBugsFixes(),
            postcssPresetEnv(presetEnvOptions),
            postcssPxtorem(pxtoremOptions)
        ]
    };
};

plugin.postcss = true;

export = plugin;