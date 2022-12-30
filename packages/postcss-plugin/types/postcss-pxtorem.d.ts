/* postcss-pxtorem doesn't have typings, so we created this file to add them for what we need*/

declare module "postcss-pxtorem" {
    import { Input, PluginCreator as PostCSSPlugin } from "postcss";
    
    namespace postcssPxToRem {
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