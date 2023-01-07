import type { Linter } from "eslint";
import { typescriptFiles } from "../utils/patterns";

const config: Linter.Config = {
    overrides: [
        {
            files: typescriptFiles,
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            extends: [
                "plugin:@typescript-eslint/recommended"
            ],
            rules: {
                // plugin:@typescript-eslint/recommended-requiring-type-checking but warn instead of errors
                "@typescript-eslint/await-thenable": "warn",
                "@typescript-eslint/no-floating-promises": "warn",
                "@typescript-eslint/no-for-in-array": "warn",
                "no-implied-eval": "off",
                "@typescript-eslint/no-implied-eval": "warn",
                "@typescript-eslint/no-misused-promises": "warn",
                "@typescript-eslint/no-unnecessary-type-assertion": "warn",
                "@typescript-eslint/no-unsafe-argument": "warn",
                "@typescript-eslint/no-unsafe-assignment": "warn",
                "@typescript-eslint/no-unsafe-call": "warn",
                "@typescript-eslint/no-unsafe-member-access": "warn",
                "@typescript-eslint/no-unsafe-return": "warn",
                "require-await": "off",
                "@typescript-eslint/require-await": "warn",
                "@typescript-eslint/restrict-plus-operands": "warn",
                "@typescript-eslint/restrict-template-expressions": "warn",
                "@typescript-eslint/unbound-method": "warn",
                
                // plugin:@typescript-eslint/strict but warn instead of errors
                "@typescript-eslint/array-type": "warn",
                "@typescript-eslint/ban-tslint-comment": "warn",
                "@typescript-eslint/class-literal-property-style": "warn",
                "@typescript-eslint/consistent-indexed-object-style": "warn",
                "@typescript-eslint/consistent-generic-constructors": "warn",
                "@typescript-eslint/consistent-type-assertions": "warn",
                "@typescript-eslint/consistent-type-definitions": "warn",
                "dot-notation": "off",
                "@typescript-eslint/dot-notation": "warn",
                "@typescript-eslint/no-base-to-string": "warn",
                "@typescript-eslint/no-confusing-non-null-assertion": "warn",
                "@typescript-eslint/no-duplicate-enum-values": "warn",
                "@typescript-eslint/no-dynamic-delete": "warn",
                "@typescript-eslint/no-extraneous-class": "warn",
                "@typescript-eslint/no-invalid-void-type": "warn",
                "@typescript-eslint/no-meaningless-void-operator": "warn",
                "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
                "no-throw-literal": "off",
                "@typescript-eslint/no-throw-literal": "warn",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
                "@typescript-eslint/no-unnecessary-condition": "warn",
                "@typescript-eslint/no-unnecessary-type-arguments": "warn",
                "@typescript-eslint/no-unsafe-declaration-merging": "warn",
                "no-useless-constructor": "off",
                "@typescript-eslint/no-useless-constructor": "warn",
                "@typescript-eslint/non-nullable-type-assertion-style": "warn",
                "@typescript-eslint/prefer-for-of": "warn",
                "@typescript-eslint/prefer-function-type": "warn",
                "@typescript-eslint/prefer-includes": "warn",
                "@typescript-eslint/prefer-literal-enum-member": "warn",
                "@typescript-eslint/prefer-nullish-coalescing": "warn",
                "@typescript-eslint/prefer-optional-chain": "warn",
                "@typescript-eslint/prefer-reduce-type-parameter": "warn",
                "@typescript-eslint/prefer-return-this-type": "warn",
                "@typescript-eslint/prefer-string-starts-ends-with": "warn",
                "@typescript-eslint/prefer-ts-expect-error": "warn",
                "@typescript-eslint/unified-signatures": "warn",
            }
        }
    ]
};

export = config;