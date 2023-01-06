import type { Linter } from "eslint";

const config: Linter.Config = {
    extends:[
        "plugin:@next/next/recommended",
        "plugin:@alexasselin/1/react"
    ]
};

export = config;