# Lerna vs Changeset

Our lerna setup : 

```bash
yarn new-version 
yarn release
yarn push-release <yyyy-MM-dd>
```

pros: 
Creates a single release for all packages. 

cons: 
- Multiple manual tasks (3 cmd + 1 github release), with no reviews
- Still have to create a github release manually
- Puts the burden of release notes on the "releaser" (me)

## Changeset

```bash
npm run add-changeset
```

pros: 
- Creates a PR for the release, allowing validation and review
- Manual tasks are handled by github actions.
- Release notes are reviewed and written by contributors (who know what they did)
- Creates a github release for every packages that changed

cons: 
- Creates a release for each package that changed instead of an aggregation based on the date (2023-01-03) release of X packages. (this could be fixed by creating a custom github action)
- Creates a CHANGELOG.md for each package. 

