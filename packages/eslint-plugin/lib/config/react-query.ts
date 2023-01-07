import type { Linter } from "eslint";
import { sourceFiles, jsxFiles }  from "../utils/patterns"

const config: Linter.Config = {
    overrides: [
        {
            files: [...sourceFiles, ...jsxFiles],
            plugins: ["react-query"],
            rules: {
                
            }
        }
    ],
};

export = config;