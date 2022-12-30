declare module "postcss-pxtorem" {
    namespace postcssPxToRem {
        import {Input, PluginCreator as PostCSSPlugin} from "postcss";
        
        export interface pluginOptions {
            propList?: string[];
            rootValue?: number | ((input:Input) => number),  
            unitPrecision?: number; 
            selectorBlackList?: string[],
            replace?: boolean,
            mediaQuery?: boolean,
            minPixelValue?: number,
            exclude?: null | string | ((path: string) => boolean);
        }
        
        type PostcssPxToRem = PostCSSPlugin<pluginOptions>;
    }

    const postcssPxToRem: postcssPxToRem.PostcssPxToRem;
    export = postcssPxToRem;
}