import type { PluginCreator, Input } from "postcss";
import postcssPresetEnv, { pluginOptions as postcssPresetEnvOptions } from "postcss-preset-env";
import postcssFlexBugsFixes from "postcss-flexbugs-fixes"
import postcssPxtorem from "postcss-pxtorem";

// We duplicate this interface since the postcss-pxtorem package doesn't have typings and consumer needs to know the options
interface postcssPxtoremOptions {
    propList?: string[];
    rootValue?: number | ((input:Input) => number),  
    unitPrecision?: number; 
    selectorBlackList?: string[],
    replace?: boolean,
    mediaQuery?: boolean,
    minPixelValue?: number,
    exclude?: null | string | ((path: string) => boolean);
}

const PRESET_ENV_OPTIONS: postcssPresetEnvOptions = {
    autoprefixer: {
        flexbox: "no-2009"
    },
    stage: 3,
    features: {
        "nesting-rules": true
    }
};

const PXTOREM_OPTIONS: postcssPxtoremOptions = {
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