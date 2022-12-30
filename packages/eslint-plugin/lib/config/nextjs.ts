import type { Linter } from "eslint";

const config: Linter.Config = {
    extends:[
        "plugin:@next/next/recommended",
        "plugin:@alexasselin/react"
    ]
};

export = config;