# Notes

## Notes about this repo: 
- Added branch policy to enforce PR, and status checks(CI) before merging
- Added npm secrets to github secrets

## Notes about Stylelint:
- Stylelint recommends moving stylistic rules to prettier, and use stylelint-prettier to run prettier as a stylelint rule.

## Notes about Changesets: 
I've tried to remove the individual changelogs using --no-changelog or even adding changelog.md to the git ignore, but this breaks the changeset github action. 

## Notes about eslint plugins: 
We should consider adding the following eslint plugins:
- [Storybook](https://www.npmjs.com/package/eslint-plugin-storybook)
- [Jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [React Testing Library](https://www.npmjs.com/package/eslint-plugin-testing-library)
- [React Query](https://www.npmjs.com/package/eslint-plugin-react-query/)
- [MDX](https://www.npmjs.com/package/eslint-plugin-mdx)

We should consider adding a typechecking config for eslint.
[typescript-type-checking](https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/lib/config/typescript-type-checking.js)